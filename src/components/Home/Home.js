import React, {Component} from 'react';
import SignIn from "./../../components/SignIn/SignIn";

class Home extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className="inner">
                <div className={'inner__col'}>
                    <h1 className={'title'}>Welcome to Papers &mdash;<br/>The Best Community Platform Ever</h1>
                    <h2 className={'subtitle'}>Happy to see you here!</h2>
                    <a href="/cfp">Let's start!</a>
                </div>
                <SignIn/>
            </div>
        )
    }
}

export default Home;
