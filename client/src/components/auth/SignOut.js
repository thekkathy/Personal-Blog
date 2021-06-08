import {useState,useEffect,useContext } from "react";
import { Button } from 'react-bootstrap';
import { signInWithGoogle,auth } from "../../firebase";
import {UsersContext} from '../../context/usersContext'
import {Link} from "react-router-dom";

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
        <button type="button" class="btn btn-danger" onClick={() => {handleSignOut()}}>Sign Out</button>
  );
};
