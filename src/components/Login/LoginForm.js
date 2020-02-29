import React from 'react';
import axios from 'axios';

const LOGIN_URL = 'https://papers-api.azurewebsites.net/api/v1/User/login';

const LoginForm = () => {
    const [ email, setEmail] = React.useState('');
    const [ password, setPassword] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(LOGIN_URL, {
                email: email,
                password: password
            })
            .then(function ( response ) {
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
                onClick={onSubmit}> Log in </button>
        </form>
    )
 }

export default LoginForm;
