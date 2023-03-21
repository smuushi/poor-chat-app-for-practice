import React from "react";

import firebase from "firebase/compat/app";

// the purpose of this component is to return a button HTML element that will allow the
// user to sign in. 
// following this logic, I should write out a button HTML element that
// will listen for an onclick event to render a specific auth window???

// Test1, I need to see if I can reference my firebase.auth.GoogleAuthProvider constructor that
// I imported with firebase on my root App.js file. 

function SignIn() {

    const germunyPrinter = function(){
        console.log('germunY')
    }

    return (
        <div className='SignIn-Component'>
            <h3>poopaya sign in HTML return</h3>
            <button onClick={germunyPrinter}>
                Click here to print germunydebug in console.
            </button>
                <br />
            <button onClick={() => {
                firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
                // putting parenthesis after auth will cause error... 
            }}>
                
                Actual Sign In button that should popup a google sign in form lmao
            </button>

            

        </div>
    )

}

export default SignIn;