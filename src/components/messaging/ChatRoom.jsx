import React from "react";

import firebase from "firebase/compat/app";

import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";


firebase.initializeApp({
    apiKey: "AIzaSyB1WYv1nSOQJSRA-ZHwbtsT0Pj89roqqgI",
    authDomain: "papayasalad-12e45.firebaseapp.com",
    projectId: "papayasalad-12e45",
    storageBucket: "papayasalad-12e45.appspot.com",
    messagingSenderId: "421844010162",
    appId: "1:421844010162:web:3cb4a5663d09fb31b435ab",
    measurementId: "G-PJYNFWGP07"
  })

function ChatRoom(props) {

    // const messages = useCollectionData()

    // task here to gather the messages for me to manipulate and pass into the ChatMessage Component
    // create a pointer to all the messages..
    // query into that reference to gather the latest messages in a specific order..
    // .... think SQL selecting and querying here.. 
    // listen to this data with my useCollectionData hook. 

    const messagesPointer = firebase.firestore().collection('messages')

    const myQueryToSelectMessages = messagesPointer.orderBy('createdAt').limit(10);

    const [messages] = useCollectionData(myQueryToSelectMessages)
    // idField is NO LONGER SUPPORTED... so I just stringified the message text as the id
    // in order to get past the error... 

    console.log(messages)
    // console.log(useCollectionData(myQueryToSelectMessages, {"idField":'id'}))
    // console.log(useCollectionData())

    return (
        <div className='ChatRoom'>
            messages will go here papayosuo
            {/* <ChatMessage /> */}
            {messages && messages.map((massage) => <ChatMessage key={JSON.stringify(massage.text)} currentUser={props.signedin} message={massage} />)}

            <ChatForm signedin={props.signedin}/>
        </div>
    )

}

export default ChatRoom;
