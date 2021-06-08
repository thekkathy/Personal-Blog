import SignOut from '../auth/SignOut'
import {useContext} from "react";
import {UsersContext} from '../../context/usersContext'
import {Link} from "react-router-dom";
import UserLikes from './UserLikes'

export default function UserPage(){

    const { users, setUsers } = useContext(UsersContext);

    return(
        <div>
            <h1>Welcome {users.displayName}</h1>
            <img src={users.photoURL}></img>
            <p>Email: {users.email}</p>
            <Link className="nav-link" to="/user-likes"><button type="button" class="btn btn-dark">View Liked Posts</button></Link>
            <SignOut/>
            <br></br>
        </div>
    )
}