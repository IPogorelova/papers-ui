import React, {Component} from 'react';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="inner">
                <div className={'inner__col'}>
                    <h1 className={'title'}>Welcome to Papers &mdash;<br/>The Best Community Platform Ever</h1>
                    <h2 className={'subtitle'}>Happy to see you here!</h2>
                    <p>To start work with us, please Sign in.<br/>
                        Haven't been here yet? Want to join us? Please, Sign up.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;
