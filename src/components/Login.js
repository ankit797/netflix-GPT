import { useState } from "react";
import Header from "./Header";

const Login = () =>{

    const [isSignInForm, setIsSignInForm] = useState(true);

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

            <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="p-4 my-2 w-full bg-black bg-opacity-0 border-solid border-2 border-gray-500 rounded-sm" 
                    />
                )}
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 my-2 w-full bg-black bg-opacity-0 border-solid border-2 border-gray-500 rounded-sm" 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-2 w-full bg-black bg-opacity-0 border-solid border-2 border-gray-500 rounded-sm" 
                />
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign In" : "Already registered? Sign Up Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;