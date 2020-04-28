import React, { useState } from 'react';
import auth from '../firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from 'firebase'
import '../App.css';
import './Login.css';

const Login =({ setSession })=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await auth.signInWithEmailAndPassword(
        username,
        password
      );
      
      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.message
      });
    }
  };

  const handleRegister = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        username,
        password
      );

      const { user } = response;

      setSession({
        isLoggedIn: true,
        currentUser: user
      });
    } catch (error) {
      setSession({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: error.essage
      });
    }
  };
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  return (
    
    <div class="wrapper">
    <div class="form-signin">
    <center>
    <img src="https://pbs.twimg.com/profile_images/874326473284431872/SnEHL7vP.jpg" height = "200" width = "200"></img>
    <h2 class="form-signin-heading">TASK FORCE 1-4-1</h2>
    {/* <p1>{username} {password}</p1> */}
    <input type="text" class="form-control" name="username" 
    placeholder="Email Address" 
    onChange={(e) =>setUsername(e.target.value)}
    />
    <input type="password" class="form-control" name="password" 
    placeholder="Password" 
    onChange={(e)=>setPassword(e.target.value)}
    />

    <button class="btn btn-success" onClick={handleLogin}> LOGIN</button>
    <button class="btn btn-danger" onClick={handleRegister}> REGISTER</button>
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}
    />
    </center>
    </div>
  </div>
  );
}

export default Login;