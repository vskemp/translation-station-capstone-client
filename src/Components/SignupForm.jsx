import React from 'react';

function SignupForm() {
    return(           
        <div>
            <form>
                <h2>Sign Up!</h2>
                <input placeholder="Create Username"></input>
                <input placeholder="Create Password"></input>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;