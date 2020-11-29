import React from 'react';
import axios from 'axios';
import CfpForm from "../CfpForm/CfpForm";

const CommunityPage = () => {
  const [ alias, setAlias ] = React.useState('')
  const [ title, setTitle ] = React.useState('')
  const [ description, setDescription ] = React.useState('')

  const GET_COMMUNITY_URL = 'http://papers.community/api/Communities'

  const getCommunity = () => {
    const alias = window.location.href.split('/')[3];
    axios.get(`${GET_COMMUNITY_URL}/${alias}`, {
      headers: {
        Authorization: `Bearer ${localStorage.access}`
      }
    })
      .then((response) => {
        const {id, alias, title, description} = response.data;
        setAlias(alias)
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
        <CfpForm alias={alias}/>
      </div>
    </div>
  )
}

export default CommunityPage;