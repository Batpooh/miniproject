import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Tab from './Tab';
import './Admin.css'

const Admin = () => {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);
 

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };
  return (
    <div>
      {session.isLoggedIn ? (
        <div>
          <span>
            <br/>
          <img src="https://pbs.twimg.com/profile_images/874326473284431872/SnEHL7vP.jpg" height = "200" width = "200"></img>
          <br/>
          <br/>
            <h1>WELCOME TO TASAK FORCE 1-4-1 WEAPON DATABASE</h1>
            <br/>
            <h3 id="op"> OPERATOR NAME : {session.currentUser && session.currentUser.displayName}</h3>
            <h3 id="opmail"> OPERATOR ID : {session.currentUser && session.currentUser.email} </h3>
            <br/>
            <h3>OPARATOR PROFILE</h3>
            <img width="180px" height="150px" src={session.currentUser && session.currentUser.photoURL}/>
          </span>
            <br/>
            <br/>   
            <button class="btn btn-danger" onClick={handleLogout}>LOGOUT</button>
            <br/>
            <br/>
          <h1>TASK FORCE INVENTORY</h1>
          <br/>
          <Tab />
        </div>
      ) : (
          <div>
          <Login setSession={setSession} />
          
           </div>
        )}

    </div>
  )
}
export default Admin