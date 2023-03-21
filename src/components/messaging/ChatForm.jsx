import { useState } from "react";

import firebase from "firebase/compat/app";

function ChatForm(props) {
    const [message, setMessage] = useState("")
    const uid =  props.signedin.uid;
    // debugger
    function submitCallback(e) {
        e.preventDefault();

        debugger

        const messagesPointer = firebase.firestore().collection('messages')

        // messagesPointer.add(

        // )


        // const res = await fetch()

    }


    const changeHandler = (e) => {
        const val = e.target.value;
        console.log(message)
        setMessage(val)
    }


    return props.signedin && (
        <>
            <h5>the new message form will be here!</h5>

            <form action="" onSubmit={(e) => submitCallback(e)}>

                <input type="text" />
                <input type="submit" value="submit" />
                <input type="hidden" value={message} onChange={changeHandler} />
            </form>
        </>

    )
}

export default ChatForm;