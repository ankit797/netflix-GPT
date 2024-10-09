import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from 'react';
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';


const Body = () =>{

    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const {uid, email, displayName, photoURL} = user;
              // adding thease into store
              dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    },[]);


    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;