import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from "./Header";
import { checkValidateData } from "../Utils/validate";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () =>{

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
        // Validate the form data
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        // Sign In / Sign up
        if(!isSignInForm){
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/C5603AQHhvQa2jfhqOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1650360263154?e=2147483647&v=beta&t=b1Kr3hAanMgDWrKb35dtpslmswICFmhrQRaZgzTn1jk"
                      }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
                        navigate("/browse");
                      }).catch((error) => {
                        setErrorMessage(errorMessage);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode +"-" +errorMessage);
                });

        }else{
            // Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode +"-" +errorMessage);
            });
        }

    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };

    return(
        <div>
            <Header />
            <div className="absolute">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" 
                    alt="background-image" 
                />
            </div>

            <form 
                onSubmit={(e) => e.preventDefault()}
                className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input 
                        ref={name}
                        type="text" 
                        placeholder="Full Name" 
                        className="p-4 my-2 w-full bg-black bg-opacity-0 border-solid border-2 border-gray-500 rounded-sm" 
                    />
                )}
                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 my-2 w-full bg-black bg-opacity-0 border-solid border-2 border-gray-500 rounded-sm" 
                />
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-2 w-full bg-black bg-opacity-0 border-solid border-2 border-gray-500 rounded-sm" 
                />
                <p className="text-red-600 font-bold text-sm">{errorMessage!==null && (errorMessage)}</p>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;