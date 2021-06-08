import {useState,useEffect,useContext } from "react";
import { Button } from 'react-bootstrap';
import { signInWithGoogle,auth } from "../../firebase";
import {UsersContext} from '../../context/usersContext'

export default function SignOut(){

  const { users, setUsers } = useContext(UsersContext);

  useEffect(()=>{
    console.log(users);
  },[users])

  function handleSignOut(){
      auth.signOut().then(() => {
        console.log('logout success')
        setUsers(null).then(window.location.replace("http://localhost:3000/"));
      }).catch((error) => {
        console.log('error with logout')
        setUsers(null);
      })
  }

  return (
    <div>
        <Button
          variant="danger"
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
          onClick={() => {
            handleSignOut();
          }}>
          Sign Out
        </Button>
    </div>
  );
};
