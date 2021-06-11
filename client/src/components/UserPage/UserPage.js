
import {useContext} from "react";
import {UsersContext} from '../../context/usersContext'
import NavigateButton from '../NavigateButton';
import "../../styles/base.css";

export default function UserPage() {

    const { users } = useContext(UsersContext);

    return (
        <div>
            <div className="container p-5" style={{height:"40rem"}}>
                {users &&
                    <div className="card outer-card p-3 h-100">
                        <div className="card h-100">
                            <div className="container-fluid my-auto">
                                <div className="row d-flex justify-content-center m-5">
                                    <img src={users.photoURL} alt='profile pic'/>
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
                                    <NavigateButton buttonName="View Liked Posts" url="/user-likes" color="dark"/>
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