import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';
import './CfpForm.scss';

const CfpForm = ({communityId}) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [topic, setTopic] = React.useState('');
    const [abstract, setAbstract] = React.useState('');

    const [ isThanxShown, setIsThanxShown ]= React.useState(false)
    const { register, handleSubmit, errors } = useForm()

    const POST_CFP_URL = 'https://papers-api.azurewebsites.net/api/v1/communities/'

    const postCfp = () => {
        setIsThanxShown(true)
        axios.post(`${POST_CFP_URL}/${communityId}/Requests/`, {
            topic: topic,
            abstract: abstract,
            requesterName: name,
            requesterEmail: email
        })
            .then((response) => {
                console.log(response)
            })
    }

    const changeButtonColor = (e) => {
        let colors = ["rgb(147, 183, 190)", "rgb(255, 202, 156)", "rgb(153, 102, 204)", "rgb(114, 4, 8)", "rgb(0, 59, 33)", "rgb(243, 207, 216)"];
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

    const handleThanx = () => {
        setIsThanxShown(false)
        setName('')
        setEmail('')
        setTopic('')
        setAbstract('')
    }

    if (isThanxShown) {
        return (
            <div className="form__thanx">
                <h1 className='subtitle'>Thanks, { name }!</h1>
                <h2 className='subtitle subtitle_small'>You've send your paper successfully</h2>
                <p>We will contact you soon by this email: { email }</p>
                <button
                    className="button form__button"
                    onClick={handleThanx}
                    onMouseOver={changeButtonColor}> Send another paper
                </button>
            </div>
        )
    } else {
        return (
            <form onSubmit={handleSubmit(postCfp)} className="form">
                <label className="form__label">
                    {errors.name && <span style={{ color: 'red', position: 'absolute', top: 0, right: 0, fontSize: '10px' }} >This field is required</span>}
                    Your name:&nbsp;&nbsp;
                    <input
                        type="text"
                        name="name"
                        className="form__input"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur(e);
                            setName(e.currentTarget.value)
                        }}
                        ref={register({ required: true })}
                    />
                </label>
                <label className="form__label">
                    {errors.email && <span style={{ color: 'red', position: 'absolute', top: 0, right: 0, fontSize: '10px' }}>This field is required</span>}
                    Your e-mail:&nbsp;&nbsp;
                    <input
                        type="email"
                        name="email"
                        className="form__input"
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur(e);
                            setEmail(e.currentTarget.value)
                        }}
                        ref={register({ required: true })}
                    />
                </label>
                <label className="form__label">
                    {errors.topic && <span style={{ color: 'red', position: 'absolute', top: 0, right: 0, fontSize: '10px' }}>This field is required</span>}
                    Talk topic:&nbsp;&nbsp;
                    <input
                        type="text"
                        name="topic"
                        className="form__input"
                        value={topic}
                        onChange={e => setTopic(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur(e);
                            setTopic(e.currentTarget.value)
                        }}
                        ref={register({ required: true })}
                    />
                </label>
                <label className="form__label">
                    {errors.abstract && <span style={{ color: 'red', position: 'absolute', top: 0, right: 0, fontSize: '10px' }}>This field is required</span>}
                    Talk abstract:&nbsp;&nbsp;
                    <textarea
                        name="abstract"
                        className="form__input"
                        value={abstract}
                        onChange={e => setAbstract(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur(e);
                            setAbstract(e.currentTarget.value)
                        }}
                        ref={register({ required: true })}
                    />
                </label>
                <button
                    type="submit"
                    className="button form__button"
                    onMouseOver={changeButtonColor}> Post!
                </button>
            </form>
        )
    }
}

export default CfpForm;