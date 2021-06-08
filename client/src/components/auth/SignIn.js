import {useState,useEffect,useContext } from "react";
import { Button } from 'react-bootstrap';
import { signInWithGoogle,auth } from "../../firebase";
import {UsersContext} from '../../context/usersContext'
import Modal from 'react-bootstrap/Modal';

export default function SignIn(){

  const { users, setUsers } = useContext(UsersContext);

  useEffect(()=>{
    console.log(users);
  },[users])

  function handleSignIn(){
    signInWithGoogle(users,setUsers);
  }

  return (
    <div height='100%' style={{ 
      backgroundImage: `url("https://i.redd.it/y1ostvqnr4711.jpg")` ,
      height: '100vh'
    }}><br></br>
      <div class="d-flex justify-content-center">
          <Button
            variant="danger"
            className="bg-red-500 hover:bg-red-600 w-full py-2 text-white mx-auto my-auto"
            onClick={() => {
              handleSignIn();
            }}>
            Sign in or Sign Up with Google
          </Button>
      </div>
    </div>
  );
};
