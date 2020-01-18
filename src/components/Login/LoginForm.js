import React, {Component} from 'react';
import axios from 'axios';

const LOGIN_URL = 'https://papers-api.azurewebsites.net/api/v1/User/login';
const REGISTER_URL = 'https://papers-api.azurewebsites.net/api/v1/User/register';

const LoginForm = () => {
    const [ email, setEmail] = React.useState('');
    const [ password, setPassword] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: LOGIN_URL,
            data: {
                email: email,
                password: password
            }
        })
    }

    const changeButtonColor = (e) => {
        let colors = ["rgb(147, 183, 190)", "rgb(255, 202, 156)", "rgb(102, 51, 153)", "rgb(114, 4, 8)", "rgb(0, 59, 33)", "rgb(243, 207, 216)"];
        let bg = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
        colors.splice((colors.indexOf(bg)), 1);
        let randomNumber = Math.floor(Math.random()*colors.length);

        e.target.style.backgroundColor = colors[randomNumber];
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
                    onChange={e => setEmail(e.currentTarget.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </label>
            <button
                type="submit"
                className="button form__button"
                onClick={onSubmit}
                onMouseOver={changeButtonColor}> Login </button>
        </form>
    )
 }

export default LoginForm;
