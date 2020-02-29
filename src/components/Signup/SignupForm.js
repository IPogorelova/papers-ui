import React, {Component} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const REGISTER_URL = 'https://papers-api.azurewebsites.net/api/v1/User/register';

const SignupForm = () => {
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword  ] = React.useState('');
    const [ isThanxShown, setIsThanxShown ]= React.useState(false)
    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(REGISTER_URL, {
            email: email,
            password: password
        })
            .then(function ( response ) {
                setIsThanxShown(true)
                const { accessToken, refreshToken } = response.data
                localStorage.clear()
                localStorage.setItem('access', accessToken)
                localStorage.setItem('refresh', refreshToken)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleFocus = (e) => {
        e.target.parentElement.style.color = '#262626';
    }

    const handleBlur = (e) => {
        e.target.parentElement.removeAttribute('style');
    }

    const handleThanx = () => {
        history.push("/communities")
        setEmail('')
        setPassword('')
    }

    if (isThanxShown) {
        return (
            <div className="form__thanx">
                <h1 className='subtitle'>Hooray!</h1>
                <p>You are signed up successfully</p>
                <button
                    className="button form__button"
                    onClick={handleThanx}
                > Create community
                </button>
            </div>
        )
    } else {
        return (
            <form className="form">
                <label className="form__label">
                    Your e-mail:&nbsp;&nbsp;
                    <input
                        type="email"
                        name="email"
                        className="form__input"
                        onChange={e => setEmail(e.currentTarget.value)}
                        onBlurCapture={e => setEmail(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <label className="form__label">
                    Your password:&nbsp;&nbsp;
                    <input
                        type="password"
                        name="password"
                        className="form__input"
                        onChange={e => setPassword(e.currentTarget.value)}
                        onBlurCapture={e => setPassword(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <button
                    type="submit"
                    className="button form__button"
                    onClick={onSubmit}> Sign up
                </button>
            </form>
        )
    }
}

export default SignupForm;
