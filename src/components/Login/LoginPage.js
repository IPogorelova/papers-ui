import React from 'react';
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <React.Fragment>
            <div className="inner">
                <div className='inner__col'>
                    <h1 className='title'>Welcome to Papers &mdash;<br/>The Best Community Platform Ever</h1>
                    <h2 className='subtitle'>Happy to see you here!</h2>
                    <a href="/">Let's start!</a>
                </div>
                <div className="form__wrapper inner__col">
                    <LoginForm />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;
