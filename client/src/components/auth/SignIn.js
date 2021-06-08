import {useState,useEffect,useContext } from "react";
import { Button } from 'react-bootstrap';
import { signInWithGoogle,auth } from "../../firebase";
import {UsersContext} from '../../context/usersContext'

export default function SignIn(){

  const { users, setUsers } = useContext(UsersContext);

  useEffect(()=>{
    console.log(users);
  },[users])

  function handleSignIn(){
    signInWithGoogle(users,setUsers);
  }

  return (
    <div>
        <Button
          variant="danger"
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
          onClick={() => {
            handleSignIn();
          }}>
          Sign in or Sign Up with Google
        </Button>
    </div>
  );
};
