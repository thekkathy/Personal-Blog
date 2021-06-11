
import { useContext } from "react";
import { UsersContext } from '../../context/usersContext'
import NavigateButton from '../NavigateButton';
import "../../styles/base.css";

import { signInWithGoogle } from "../../firebase";

export default function UserPage() {

    const { users, setUsers } = useContext(UsersContext);

    function handleSignIn() {
        console.log('sign in')
        signInWithGoogle(users, setUsers);
      }

    return (
        <div>
            <div className="container p-5" style={{ height: "40rem" }}>
                {users ?
                    <div className="card outer-card p-3 h-100">
                        <div className="card h-100">
                            <div className="container-fluid my-auto">
                                <div className="row d-flex justify-content-center m-5">
                                    <img src={users.photoURL} alt='profile pic' />
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
                                    <div className="mx-2">
                                    <NavigateButton buttonName="View Liked Posts" url="/user-likes" color="dark" />
                                    </div>
                                    <div className="mx-2">
                                    <NavigateButton buttonName="View Commented Posts" url="/user-commented" color="dark" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row m-4 d-flex justify-content-center mt-5">
                            <h2>Please sign in to view your profile</h2>
                        </div>
                        <div className="row m-4 d-flex justify-content-center">
                            <button
                                className="btn btn-dark"
                                onClick={() => handleSignIn()}
                            >
                                Sign In
                            </button>
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