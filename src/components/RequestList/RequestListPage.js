import React from 'react';
import axios from 'axios';
import cn from 'classnames'

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import RequestList from './RequestList'

const GET_REQUESTS_URL = 'http://papers.community/api/Requests';

const Community = ({ name, link }) => {
  console.log(name)
  return (
    <>
      <a href={`/communities/${link}/requests`} className='community-block'>
        <span className="community-block__title">{name}</span>
      </a>
    </>
  )
}

const RequestListPage = () => {
  let communityID = 'spbfront'
  const [ requests, setRequests ] = React.useState([]);
  const [ error, setError ] = React.useState(null)

  React.useEffect(() => {
    const getRequests  = (communityID) => {
      axios.get(GET_REQUESTS_URL,  {
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant': communityID,
          Authorization: `Bearer ${localStorage.access}`
        }
      })
        .then(function ( response ) {
          setRequests(response.data)
        })
        .catch(function (error) {
          setError(error.response.status)
        });
    }
    getRequests(communityID)
  },  [])

  if (requests && requests.length >= 0 && !error) {
    return (
      <>
        <Header/>
        <main>
          <Sidebar/>
          <RequestList requests={requests} communityID={communityID} />
        </main>
      </>
    )
  } else if (error) {
    switch (error) {
      case 401: {
        return (
          <>
            <h1 style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>Hmmmm...</h1>
            <p style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>
              Seems like you are unauthorized. Please <a href="/signup">Sign up</a> or <a href="/login">Sign
              in</a> to continue your work.
            </p>
          </>
        )
      }
      default: {
        return (
          <>
            <h1 style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>Ooops...</h1>
            <p style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>
              Something went wrong, but we know and fixing already
            </p>
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

export default RequestListPage;
