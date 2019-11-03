import React, {Component} from 'react';
import './EventsList.scss';

class EventsList extends Component {
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

    postData(e) {
        e.preventDefault();
        console.log(this.state);
        if (this.state.amount > 0 && this.state.title.length) {
            this.setState({
                ticketItems: [...this.state.ticketItems, {title: this.state.title, amount: this.state.amount}],
                title: '',
                amount: ''
            })
        }
    }

    render() {
        return(
            <div className={"events-list"}>
                <h1 className={"title"}>Events constructor</h1>
                <form className={"events-list__form"}>
                    <label className={"events-list__label"}>
                        Event title:&nbsp;&nbsp;
                        <input type="text" name={"title"} className={"events-list__input"} value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label className={"events-list__label"}>
                        Tickets amount:&nbsp;&nbsp;
                        <input type="number" name={"amount"} className={"events-list__input"} value={this.state.amount} onChange={this.handleChange} placeholder={0} />
                    </label>
                    <button className={"button"} onClick={this.postData}> Post! </button>
                </form>

                <ol className={"events-list__list"}>
                    {this.state.ticketItems.map((value, key) => {
                        return (<li className={"events-list__item"} key={key}>{value.title}: {value.amount}</li>)
                    })}
                </ol>
            </div>
        )
    };
}

export default EventsList;
