import React from 'react';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';

function Login() {
    return (
        <div>
            <div>
                <h2>Login/Sign Up</h2>
            </div>
            <div>
                <LoginForm />
                <SignupForm />
            </div>
        </div>
    )
};

export default Login;