import React from 'react';
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <>
            <div className="inner">
                <div className='inner__col'>
                    <h1 className='title'>Welcome to Papers &mdash;<br/>The Best Community Platform Ever</h1>
                    <h2 className='subtitle'>Happy to see you here!</h2>
                    <p>To start work with us, please  <a href="/login">Sign in</a>.<br />
                        Haven't been here yet? Want to join us? Please, <a href="/signup">Sign up</a>.
                    </p>
                </div>
                <div className="form__wrapper inner__col">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage;
