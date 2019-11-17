import React, {Component} from 'react';
import './CfpForm.scss';

class CfpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            topic: '',
            abstract: '',
            talksItems: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.postData = this.postData.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    postData(e) {
        // e.preventDefault();
        console.log(this.state);
        if (this.state.amount > 0 && this.state.topic.length && this.state.abstract.length) {
            this.setState ({
                talksItems: [...this.state.ticketItems,
                    {
                        speaker: {
                        name: this.state.name,
                        email: this.state.email,
                        },
                        talk: {
                        topic: this.state.topic,
                        abstract: this.state.abstract
                        }
                    }],
                name: '',
                email: '',
                topic: '',
                abstract: ''
            })
        }
        console.log(this.state)
    }

    onMouseOver(e) {
        let colors = ["rgb(147, 183, 190)", "rgb(255, 202, 156)", "rgb(102, 51, 153)", "rgb(114, 4, 8)", "rgb(0, 59, 33)", "rgb(243, 207, 216)"];
        let bg = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
        colors.splice((colors.indexOf(bg)), 1);
        let randomNumber = Math.floor(Math.random()*colors.length);

        e.target.style.backgroundColor = colors[randomNumber];
    }

    handleFocus(e) {
        e.target.parentElement.style.color = '#262626';
    }

    handleBlur(e) {
        e.target.parentElement.removeAttribute('style');
    }

    render() {
        return(
            <div className="inner">
                <div className={'inner__col'}>
                    <h1 className={'title'}>Welcome to Papers &mdash;<br />The Best Community Platform Ever</h1>
                    <h2 className={'subtitle'}>Happy to see you here!</h2>
                    <p>To start work with us, please Sign in.<br />
                        Haven't been here yet? Want to join us? Please, Sign up.
                    </p>
                </div>

                <div className={'form__wrapper inner__col'}>
                    <form className={"form"}>
                        <label className={"form__label"}>
                            Your name:&nbsp;&nbsp;
                            <input type="text" name={"name"} className={"form__input"} value={this.state.amount}
                                   onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                        </label>
                        <label className={"form__label"}>
                            Your e-mail:&nbsp;&nbsp;
                            <input type="email" name={"email"} className={"form__input"} value={this.state.amount}
                                   onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                        </label>
                        <label className={"form__label"}>
                            Talk topic:&nbsp;&nbsp;
                            <input type="text" name={"topic"} className={"form__input"} value={this.state.title}
                                   onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                        </label>
                        <label className={"form__label"}>
                            Talk abstract:&nbsp;&nbsp;
                            <textarea name={"abstract"} className={"form__input"} value={this.state.amount}
                                      onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
                        </label>
                        <button type={"button"} className={"button form__button"} onClick={this.postData} onMouseOver={this.onMouseOver}> Post! </button>
                    </form>
                </div>
            </div>
        )
    };
}

export default CfpForm;
