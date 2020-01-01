import React, {Component} from 'react';
import TextFieldGroup from "../TextFieldGroup/TextFieldGroup";
import axios from 'axios';

const LOGIN_URL = 'https://papers-api.azurewebsites.net/api/v1/User/login';
const REGISTER_URL = 'https://papers-api.azurewebsites.net/api/v1/User/register';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault()
        const userInfo = JSON.stringify(this.state)
        console.log(userInfo)

        axios({
            method: 'POST',
            url: REGISTER_URL,
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const { email, password } = this.state;
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <TextFieldGroup
                    field = "email"
                    label = "Email"
                    value = {email}
                    onChange = {this.onChange}
                    type = "email"
                />
                <TextFieldGroup
                    field = "password"
                    label = "Password"
                    value = {password}
                    onChange = {this.onChange}
                    type = "password"
                />

                <button type="submit" className={"button form__button"}>Login</button>
            </form>
        )
    }
}

export default About;
