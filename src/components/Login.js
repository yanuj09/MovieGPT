import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BGIMG, USER_AVATAR } from "../utils/constants";

const Login = () =>{

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const dispatch = useDispatch();

    // refering the the input value of email and password
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    
    //=> HANDLE THE signin button
    const handleButtonClick = () =>{
        // validation logic
        const checkName = !isSignInForm
        
        if(!isSignInForm){
            // signup form validation
            const message = checkValidData (email.current.value, password.current.value, name.current.value , checkName);
            setErrorMessage(message);

        }
        else{
            // signin form validation
            const message = checkValidData (email.current.value, password.current.value, null, checkName);
            setErrorMessage(message);
            if(message) return; 
        }


        //signIn / SignUp logic

        if(!isSignInForm){
            //signup logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )  // api to create use 
            .then((userCredential) =>{
                const user = userCredential.user;
                //updating the profile with name and photo
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR 
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL } = auth.currentUser;

                    dispatch(
                        addUser({
                            uid: uid, 
                            email: email , 
                            displayName : displayName , 
                            photoURL : photoURL 
                    }));
                    
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                    // ...
                  });
                
                console.log(user);
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessagee = error.message;
                setErrorMessage(errorCode + "-" + errorMessagee);
            })

            

        }
        else{
            //sign IN logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
            .then((userCredential) =>{
                const user = userCredential.user;
                
                console.log(user);
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessagee = error.message;
                setErrorMessage(errorCode + "--" + errorMessagee);
            })
           
        }
        

        

        

    }

    // =>function to handle toggle
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    return(
        
        <div >
            <Header/>

            <div className="absolute">
                <img className="h-screen object-cover md: w-screen" src= {BGIMG} 
                alt="bgImg"
                ></img>

            </div>

            <form onSubmit={(e) =>e.preventDefault()}
            className=" absolute p-12 bg-black w-full md:w-3/12 m-36 mx-auto right-0 left-0 bg-opacity-[0.83]"
            >

                <h1 className="text-white font-bold text-3xl py-4 ">{isSignInForm ?"Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input type="text" placeholder="Full Name"
                ref={name}
                className="p-4 my-3 bg-black  w-full border rounded-lg text-white"
                ></input>}
                
                {/* email and password input */}
                <input type="text" 
                ref={email}
                placeholder="Email or mobile number"
                className="p-4 my-3 bg-black  w-full border rounded-lg text-white"
                ></input>

                <input type="text" 
                ref={password}
                placeholder="Password"
                className="p-4 my-3 bg-black w-full border rounded-lg text-white"
                ></input>

                {/* error message */}
                <p className="text-red-500 font-bold">{errorMessage}</p>
                {/*signin button  */}
                <button className=" p-3 my-3 bg-red-700 text-white w-full rounded-lg"
                    onClick = {handleButtonClick}
                >
                    {isSignInForm ?"Sign In" : "Sign Up"}

                </button>

                {/* toggle in signup and signin */}
                <p className="text-white font-semibold hover: cursor-pointer hover:underline" 
                onClick={toggleSignInForm}>
                   {isSignInForm ? " New to Netflix? Sign up now" :" Already Registered User ? Sign in now"}</p>
            </form>
        </div>

        
           
    )
}
export default Login;