import React from "react";
import firebase from "firebase/compat/app";

function SignOut() {

    if (firebase.auth().currentUser){

        
        return (

            <button onClick={() => {
                firebase.auth().signOut();
            }}>
                sign out here!!!
            </button>

        )
            
            
    } else {
        return null;
    }
            
}

export default SignOut;

