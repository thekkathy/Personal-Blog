import SignOut from './SignOut'
import {useContext } from "react";
import {UsersContext} from '../../context/usersContext'

export default function UserPage(){

    const { users, setUsers } = useContext(UsersContext);

    return(
        <div>
            <h1>Welcome {users.displayName}</h1>
            <img src={users.photoURL}></img>
            <p>Email: {users.email}</p>
            <SignOut/>
        </div>
    )
}