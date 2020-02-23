import React from 'react';
import axios from "axios";

import './communities-list.scss'

const GET_COMMUNITIES_URL = 'https://papers-api.azurewebsites.net/api/v1/Communities/owned-by-user'

const Community = ({ name, link }) =>{
    return (
        <>
            <a href={`/communities/${link}/requests`} className='community-block'>
                <span className="community-block__title">{name}</span>
            </a>
            <a className='community-block'>
                <span className="community-block__title">PiterJS</span>
            </a>
            <a className='community-block'>
                <span className="community-block__title">SPB DOT NET</span>
            </a>
            <button className="community-block community-block_button">+</button>
        </>
    )
}

const CommunitiesListPage = () => {
    const [ communities, setCommunities ] = React.useState([])
    const [ error, setError ] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(GET_COMMUNITIES_URL, {
                headers: {
                    Authorization: `Bearer ${localStorage.access}`
                }
            })
                .then(function ( response ) {
                    // return response
                    setCommunities(response.data)
                })
                .catch(function (error) {
                    setError(error.response.status)
                });
        }
        fetchData()
    },  [])

    if (communities.length > 0 && !error) {
        return (
            <>
                <div className="inner">
                    <div className="communities-list">
                        {communities.map((community, i) => <Community key={`community-${i}`} image='' link={community.id} name={community.title}/>)}
                    </div>
                </div>
            </>
        )
    } else if (error) {
        switch(error) {
            case 401: {
                return (
                    <>
                        <h1 style={{ width: 'fit-content', height: 'fit-content', margin: 'auto' }}>Hmmmm...</h1>
                        <p style={{ width: 'fit-content', height: 'fit-content', margin: 'auto' }}>
                            Seems like you are unauthorized. Please <a href="/signup">Sign up</a> or <a href="/login">Sign in</a> to continue your work.
                        </p>
                    </>
                )
            }
            default: {
                return (
                    <>
                        <h1 style={{ width: 'fit-content', height: 'fit-content', margin: 'auto' }}>Ooops...</h1>
                        <p style={{ width: 'fit-content', height: 'fit-content', margin: 'auto' }}>Something went wrong, but we know and fixing already</p>
                    </>
                )
            }
        }

    } else {
        return (
            <p style={{ width: 'fit-content', height: 'fit-content', margin: 'auto' }}>Please, wait...</p>
        )
    }
}

export default CommunitiesListPage;
