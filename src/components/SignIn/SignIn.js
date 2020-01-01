import React, {Component} from 'react';

class SignIn extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="inner">
                <div className={'inner__col'}>
                    <h1 className={'title'}>SIGN IN: Welcome to Papers &mdash;<br/>The Best Community Platform Ever</h1>
                    <h2 className={'subtitle'}>Happy to see you here!</h2>
                    <a href="/">Let's start!</a>
                </div>
            </div>
        )
    }
}

export default SignIn;
