import React, {Component} from 'react';
import './App.css';
import EventsList from './components/EventsList/EventsList';
import MainPanel from "./components/MainPanel/MainPanel";
import CfpForm from "./components/CfpForm/CfpForm";

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            amount: 1,
            ticketItems: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.postData = this.postData.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    postData() {
        console.log(this.state);
        if (this.state.amount > 0 && this.state.title.length)
        this.setState ({
            ticketItems: [...this.state.ticketItems, {title: this.state.title, amount: this.state.amount}],
            title: '',
            amount: ''
        })
    }

    render() {
        return(
            <div className="App">
                <div className="inner">
                    <div className={'inner__col'}>
                        <h1 className={'title'}>Welcome to Papers &mdash;<br />The Best Community Platform Ever</h1>
                        <h2 className={'subtitle'}>Happy to see you here!</h2>
                        <p>To start work with us, please Sign in.<br />
                           Haven't been here yet? Want to join us? Please, Sign up.
                        </p>
                    </div>
                    <CfpForm />
                </div>
                {/*<MainPanel />*/}
                {/*<EventsList />*/}
            </div>
        )
    };
}

export default App;
