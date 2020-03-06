import React from 'react';
import Images from '../Images/lang.png';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';

function Login() {
    return (
        <div>
            <div>
                <h2>Login/Sign Up</h2>
                <div className="salut">
                        <img src={Images} alt="Hello in different languages"></img>
                </div>
            </div>
            <div>
                <LoginForm />
                <SignupForm />
            </div>
        </div>
)};

export default Login;