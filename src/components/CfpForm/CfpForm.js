import React, {Component} from 'react';
import './CfpForm.scss';

class CfpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            topic: '',
            abstract: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.postData = this.postData.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    postData() {
        console.log(this.state);
        if (this.state.amount > 0 && this.state.title.length) {
            this.setState ({
                talksItems: [...this.state.ticketItems, {title: this.state.title, amount: this.state.amount}],
                topic: '',
                abstract: ''
            })
        }
    }

    onMouseOver(event) {
        let colors = ["rgb(147, 183, 190)", "rgb(252, 222, 156)", "rgb(102, 51, 153)"];
        let bg = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
        colors.splice((colors.indexOf(bg)), 1);
        let randomNumber = Math.floor(Math.random()*colors.length);

        event.target.style.backgroundColor = colors[randomNumber];
    }


    render() {
        return(
            <div className={'form__wrapper inner__col'}>
                <form className={"form"}>
                    <label className={"form__label"}>
                        Your name:&nbsp;&nbsp;
                        <input type="text" name={"name"} className={"form__input"} value={this.state.amount} onChange={this.handleChange} />
                    </label>
                    <label className={"form__label"}>
                        Your e-mail:&nbsp;&nbsp;
                        <input type="email" name={"email"} className={"form__input"} value={this.state.amount} onChange={this.handleChange} />
                    </label>
                    <label className={"form__label"}>
                        Talk topic:&nbsp;&nbsp;
                        <input type="text" name={"topic"} className={"form__input"} value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label className={"form__label"}>
                        Talk abstract:&nbsp;&nbsp;
                        <textarea name={"abstract"} className={"form__input"} value={this.state.amount} onChange={this.handleChange} />
                    </label>
                    <button className={"button form__button"} onClick={this.postData} onMouseOver={this.onMouseOver}> Post! </button>
                </form>
            </div>
        )
    };
}

export default CfpForm;
