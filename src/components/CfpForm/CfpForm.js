import React, {Component} from 'react';
import './CfpForm.scss';

const CfpForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [topic, setTopic] = React.useState('');
    const [abstract, setAbstract] = React.useState('');
    const talksItems = [];

    const postData = (e) => {
        e.preventDefault();
        if (topic.length && abstract.length) {
            talksItems.push({
                speaker: {
                    name: name,
                    email: email,
                },
                talk: {
                    topic: topic,
                    abstract: abstract
                }
            })
        }
        console.log(talksItems)
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
        <div className="inner">
            <div className='inner__col'>
                <h1 className='title'>Welcome to Papers &mdash;<br />The Best Community Platform Ever</h1>
                <h2 className='subtitle'>Happy to see you here!</h2>
                <p>To start work with us, please  <a href="/login">Sign in</a>.<br />
                    Haven't been here yet? Want to join us? Please, <a href="/login">Sign up</a>.
                </p>
            </div>

            <div className='form__wrapper inner__col'>
                <form className="form">
                    <label className="form__label">
                        Your name:&nbsp;&nbsp;
                        <input
                            type="text"
                            name="name"
                            className="form__input"
                            value={name}
                            onChange={e => setName(e.currentTarget.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="form__label">
                        Your e-mail:&nbsp;&nbsp;
                        <input
                            type="email"
                            name="email"
                            className="form__input"
                            value={email}
                            onChange={e => setEmail(e.currentTarget.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="form__label">
                        Talk topic:&nbsp;&nbsp;
                        <input
                            type="text"
                            name="topic"
                            className="form__input"
                            value={topic}
                            onChange={e => setTopic(e.currentTarget.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="form__label">
                        Talk abstract:&nbsp;&nbsp;
                        <textarea
                            name="abstract"
                            className="form__input"
                            value={abstract}
                            onChange={e => setAbstract(e.currentTarget.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>
                    <button
                        type="submit"
                        className="button form__button"
                        onClick={postData}
                        onMouseOver={changeButtonColor}> Post! </button>
                </form>
            </div>
        </div>
    )
}

export default CfpForm;