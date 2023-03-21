

function ChatMessage(props) {

    const {text, uid} = props.message;

    const loggedInUser = props.currentUser.uid;

    console.log(loggedInUser)
    // debugger

    if (loggedInUser === uid) {
        return (
            <p>omg an actual message sorta.. that was sent..<br />
    
                {text}
                {/* {console.log(uid)} */}
            </p>
        )
    } else {
        return (
            <p>omg an actual message sorta.. that was received..<br />
    
                {text}
                {/* {console.log(uid)} */}
            </p>
        )
    }
}

export default ChatMessage