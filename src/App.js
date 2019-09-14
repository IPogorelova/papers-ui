import React, {Component} from 'react';
import './App.css';

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
                <br />

                <input type="text" name={"title"} value={this.state.title} onChange={this.handleChange} />
                <br />
                <input type="number" name={"amount"} value={this.state.amount} onChange={this.handleChange} placeholder={0} />
                <br />
                <button onClick={this.postData}> Post! </button>
                <br /><br />

                <ol>
                    {this.state.ticketItems.map((value, key) => {
                        return (<li key={key}>{value.title}: {value.amount}</li>)
                    })}
                </ol>
            </div>
        )
    };
}

export default App;
