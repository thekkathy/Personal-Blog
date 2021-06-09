
import {useContext} from "react";
import {UsersContext} from '../../context/usersContext'
import {Link} from "react-router-dom";
import UserLikes from './UserLikes'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function UserPage(){

    const { users, setUsers } = useContext(UsersContext);

    return(
        <div>
            <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
            {users!=null ?
            <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
                <br></br>
                <div
                className="border border-blue-300"
                ><img style={{
                    height: "200px",
                    width: "200px",
                    padding: "20px"
                }}src={users.photoURL}></img></div>
                <div className = "md:pl-4">
                <br></br>
                <h2 className = "text-2xl font-semibold">{users.displayName}</h2>
                <h3 className = "italic">{users.email}</h3>
                </div>
            </div>: <div></div>}
            </div>
            <br></br>
            {users!=null ?
            <div className="d-flex justify-content-center">
                <Link className="nav-link" to="/user-likes"><button type="button" class="btn btn-dark">View Liked Posts</button></Link>
            </div>: <div></div>}
            <br></br>
        </div> 
    )
}