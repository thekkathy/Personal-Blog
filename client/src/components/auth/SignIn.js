import { useState, useEffect, useContext } from "react";
import { Button } from 'react-bootstrap';
import { signInWithGoogle, auth } from "../../firebase";
import { UsersContext } from '../../context/usersContext'
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

export default function SignIn() {

  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    console.log(users);
  }, [users])

  function handleSignIn() {
    signInWithGoogle(users, setUsers);
  }

  return (
    <div height='100%' style={{
      backgroundImage: `url("https://i.redd.it/y1ostvqnr4711.jpg")`,
      height: '100vh'
    }}>
      <div className="d-flex w-100 h-100 my-auto align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <button type="button" class="btn btn-dark" onClick={() => { handleSignIn() }}>Sign In With Google</button>
        </div>
      </div>
    </div>
  );
};
