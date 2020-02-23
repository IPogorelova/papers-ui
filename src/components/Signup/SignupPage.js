import React from 'react';
import SignupForm from "./SignupForm";

const LoginPage = () => {
    return (
        <>
            <div className="inner">
                <div className='inner__col'>
                    <h1 className='title'>Welcome to Papers &mdash;<br/>The Best Community Platform Ever</h1>
                    <h2 className='subtitle'>Happy to see you here!</h2>
                    <p>To start work with us, please Sign up or <a href="/login">Sign in</a>.</p>
                </div>
                <div className="form__wrapper inner__col">
                    <SignupForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage;
