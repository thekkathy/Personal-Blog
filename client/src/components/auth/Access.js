import React from 'react'
import {UsersContext} from '../../context/usersContext'
import SignIn from './SignIn'
import {useContext } from "react";
import {
    Link
} from "react-router-dom";
import UserPage from './UserPage'

export default function PasswordReset(){

    const { users, setUsers } = useContext(UsersContext);

    return (
        <div>
            {users === null ? <SignIn/> : <UserPage/>}
        </div>
    )
}
