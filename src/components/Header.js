import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO } from "../Utils/constant";

const Header = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {}).catch((error) => {
            // An error happened.
            navigate('/error');
          });
    }

    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const {uid, email, displayName, photoURL} = user;
              // adding thease into store
              dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
              navigate('/browse');
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate('/');
            }
          });

        // unmount the function(unsubscribe when component is unmount)
        return ()=> unsubscibe();
    },[]);

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
                className="w-44"
                src={LOGO}
                alt="logo" 
            />

            {user !== null && (
                <div className="flex p-4">
                    <img
                        className="w-12 h-12"
                        src={user?.photoURL}
                        alt="usericon"
                    />
                    <button className="bg-red-500 font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
                </div>
            )}

        </div>
    );
};

export default Header;