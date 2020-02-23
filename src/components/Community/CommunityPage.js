import React from 'react';
import axios from 'axios';
import CfpForm from "../CfpForm/CfpForm";

const CommunityPage = () => {
    const [ communityId, setCommunityId ] = React.useState('')
    const [ title, setTitle ] = React.useState('')
    const [ description, setDescription ] = React.useState('')

    const GET_COMMUNITY_URL = 'https://papers-api.azurewebsites.net/api/v1/Communities/by-short-name/'

    const getCommunity = () => {
        const communityName = window.location.href.split('/')[3];
        axios.get(`${GET_COMMUNITY_URL}/${communityName}`)
            .then((response) => {
                const {id, shortName, title, description} = response.data;
                setCommunityId(id)
                setTitle(title)
                setDescription(description)
            })
    }

    React.useEffect(getCommunity)

    return (
        <div className="inner">
            <div className='inner__col'>
                <h1 className='title'>Welcome to { title }</h1>
                <h2 className='subtitle'>Happy to see you here!</h2>
                <p>{ description }</p>
            </div>

            <div className='form__wrapper inner__col'>
                <CfpForm communityId={communityId}/>
            </div>
        </div>
    )
}

export default CommunityPage;