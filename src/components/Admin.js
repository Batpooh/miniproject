import React, { useState, useEffect } from 'react';
import Login from './Login'
import auth from '../firebase';
import Tab from './Tab';

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
            <h1>OPERATOR NAME {session.currentUser && session.currentUser.displayName}</h1>
            {session.currentUser && session.currentUser.email}
            <br/>
            <img
               width="180px" height="150px"
              src={session.currentUser && session.currentUser.photoURL}
            />
          </span>
          
            <br/>
           
            <button class="btn btn-danger" onClick={handleLogout}>LOGOUT</button>
          <h1>TASK FORCE INVENTORY</h1>
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