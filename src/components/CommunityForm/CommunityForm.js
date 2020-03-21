import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../CfpForm/CfpForm.scss';
const POST_COMMUNITY_URL = 'https://papers-api.azurewebsites.net/api/v1/Communities/'

const CommunityForm = () => {
    const [title, setTitle] = React.useState('');
    const [alias, setAlias] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [ isThanxShown, setIsThanxShown ]= React.useState(false)
    const { register, handleSubmit, errors } = useForm()

    const postCommunity = () => {
        setIsThanxShown(true)
        axios.post(`${POST_COMMUNITY_URL}`, {
            title: title,
            alias: alias,
            description: description
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.access}`
            }
        })
        .then((response) => {
            console.log(response)
        })
    }

    const handleFocus = (e) => {
        e.target.parentElement.style.color = '#262626';
    }

    const handleBlur = (e) => {
        e.target.parentElement.removeAttribute('style');
    }

    const handleThanx = () => {
        setIsThanxShown(false)
        setTitle('')
        setAlias('')
        setDescription('')
    }

    if (isThanxShown) {
        return (
            <div className="form__thanx">
                <h1 className='subtitle'>Great!</h1>
                <p>You've just created a page for {title}</p>
                <a
                    href={`/${alias}/requests`}
                    className="button form__button"
                    onClick={handleThanx}
                > See community page
                </a>
            </div>
        )
    } else {
        return (
            <form onSubmit={handleSubmit(postCommunity)} className="form">
                <label className="form__label">
                    {errors.title && <span style={{ color: 'red', position: 'absolute', top: 0, right: 0, fontSize: '10px' }} >This field is required</span>}
                    Community title:&nbsp;&nbsp;
                    <input
                        type="text"
                        name="title"
                        className="form__input"
                        value={title}
                        onChange={e => setTitle(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur(e);
                            setTitle(e.currentTarget.value)
                        }}
                        ref={register({ required: true })}
                    />
                </label>
                <label className="form__label">
                    {errors.alias && <span style={{ color: 'red', position: 'absolute', top: 0, right: 0, fontSize: '10px' }}>This field is required</span>}
                    Short name (for use in links):&nbsp;&nbsp;
                    <input
                        type="text"
                        name="alias"
                        className="form__input"
                        value={alias}
                        onChange={e => setAlias(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur(e);
                            setAlias(e.currentTarget.value)
                        }}
                        ref={register({ required: true })}
                    />
                </label>
                <label className="form__label">
                    {errors.description && <span style={{ color: 'red', position: 'absolute', top: 0, right: 0, fontSize: '10px' }}>This field is required</span>}
                    Community description:&nbsp;&nbsp;
                    <textarea
                        name="description"
                        className="form__input"
                        value={description}
                        onChange={e => setDescription(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur(e);
                            setDescription(e.currentTarget.value)
                        }}
                        ref={register({ required: true })}
                    />
                </label>
                <button
                    type="submit"
                    className="button form__button"
                > Create! </button>
            </form>
        )
    }
}

export default CommunityForm;