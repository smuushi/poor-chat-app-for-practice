import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';

import ChatRoom from './components/messaging/ChatRoom';

firebase.initializeApp({
  apiKey: "AIzaSyB1WYv1nSOQJSRA-ZHwbtsT0Pj89roqqgI",
  authDomain: "papayasalad-12e45.firebaseapp.com",
  projectId: "papayasalad-12e45",
  storageBucket: "papayasalad-12e45.appspot.com",
  messagingSenderId: "421844010162",
  appId: "1:421844010162:web:3cb4a5663d09fb31b435ab",
  measurementId: "G-PJYNFWGP07"
})

const auth = firebase.auth();
// const firestore = firebase.firestore();


function App() {


  const [user] = useAuthState(auth);
  console.log(!!user)
  // const user = false;
  // let's try to use turnary logic like the tutorial says in order to render a
  // different section. 

  
  return (
    <div className="App">
      <header className="App-header">
          <h1> App main component header here!</h1>
          <h2> <SignOut /> </h2> 
          {/* this sign out doesn't render if you're signed in because 
          the component is programmed to return null if not signed in. */}
      </header>

      {/* {console.log(firebase.auth)} */}
      
      <section>
        <h3> section here!</h3>

        {user ? <ChatRoom signedin={user} /> : <SignIn /> }
        {console.log(<SignIn />)}
        
      </section>

    </div>
  );
}

export default App;
