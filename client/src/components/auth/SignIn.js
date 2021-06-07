import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset.js";
import { Button } from 'react-bootstrap';
import {auth} from '../../firebase'
import { signInWithGoogle } from "../../firebase";

const SignIn = () => {


  return (
    <div className="mt-8">
      <h1 className="text-3xl mb-2 text-center font-bold">Sign In</h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <Button
          variant="danger"
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
          onClick={() => {
            signInWithGoogle();
          }}>
          Sign in with Google
        </Button>
        <p className="text-center my-3">
          Don't have an account?{" "}
        </p>
        <p className="text-center my-3">
            <Link className="text-blue-500 hover:text-blue-600" to="/SignUp">
                Sign up here
            </Link>
        </p>
        <p className="text-center my-3">
            <Link className="text-blue-500 hover:text-blue-600" to="/PasswordReset">
                Forgot Password?
            </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;