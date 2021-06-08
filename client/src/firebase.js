import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import axios from 'axios';

const firebaseConfig = {
    apiKey: "AIzaSyDfsvRQdXqv7a1U9I6gc42lPAlqdV5SmLs",
    authDomain: "blogproject-c321d.firebaseapp.com",
    projectId: "blogproject-c321d",
    storageBucket: "blogproject-c321d.appspot.com",
    messagingSenderId: "947928892998",
    appId: "1:947928892998:web:ded52fdb4b4faa7d70ac47"
  };

// const { users, setUsers } = usersContext(usersContext)


firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = (users,setUsers) => {
    auth.signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      axios.get('http://localhost:8000/users/signin',{
        params:{
          uid:result.user['providerData'][0]['uid'],
          displayName:result.user['providerData'][0]['displayName'],
          photoURL:result.user['providerData'][0]['photoURL'],
          email:result.user['providerData'][0]['email'],
        }
      })
      .then(function(resp){
        setUsers(resp.data);
      })
      // ...
    })
    //.then get request send user id retreive user in middle if not exist create user
    //then set context
    // .catch((error) => {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   return null;
    //   // ...
    // });
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();