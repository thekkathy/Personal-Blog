
import {useContext} from "react";
import {UsersContext} from '../../context/usersContext'
import {Link} from "react-router-dom";
import UserLikes from './UserLikes'
import NavigateButton from '../NavigateButton';


import "../../styles/base.css";

export default function UserPage() {

    const { users, setUsers } = useContext(UsersContext);

    return (
        <div>
            <div className="container">
                {users &&
                    <div className="card outer-card p-3 m-4">
                        <div className="card">
                            <div className="container-fluid">
                                <div className="row d-flex justify-content-center m-5">
                                    <img src={users.photoURL} />
                                </div>
                                <div className="container my-4">
                                    <h2 className="d-flex justify-content-center">
                                        {users.displayName}
                                    </h2>
                                    <h3 className="d-flex justify-content-center">
                                        {users.email}
                                    </h3>
                                </div>
                                <div className="row d-flex justify-content-center m-5">
                                    <NavigateButton buttonName="View Liked Posts" url="/user-likes" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

// {users &&
//     <div>
//         <img src={users.photoURL} />
//         <h2 className = "text-2xl font-semibold">{users.displayName}</h2>
//     <h3 className = "italic">{users.email}</h3>
//     <div className="d-flex justify-content-center">
//     
// </div>
// }