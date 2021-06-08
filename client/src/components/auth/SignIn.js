import React, {useState,useEffect,useContext } from "react";
import { Button } from 'react-bootstrap';
import { signInWithGoogle,auth } from "../../firebase";

const SignIn = () => {

  // const {user,setUser} = useContext(UserProvider);

  // useEffect(()=>{
  //   auth.onAuthStateChanged(userAuth => {
  //     setUser({ user: userAuth});
  //    });
  // },[user])

  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
        <Button
          variant="danger"
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
          onClick={() => {
            signInWithGoogle();
          }}>
          Sign in or Sign Up with Google
        </Button>
    </div>
  );
};
export default SignIn;