import React from 'react';
import { ReactComponent as Like } from '../../images/icons/like.svg'
import axios from 'axios'

const Request = ({item, communityID}) => {
  const [ isOpened, setIsOpened ] = React.useState(false);
  const [ isAccept, setIsAccept ] = React.useState(!!item.thumbsUpCount);
  const [ acceptAmount, setAcceptAmount ] = React.useState(item.thumbsUpCount);
  const [ isReject, setIsReject ] = React.useState(!!item.thumbsDownCount);
  const [ rejectAmount, setRejectAmount ] = React.useState(item.thumbsDownCount);
  const [ abstract, setAbstract ] = React.useState(item.abstract);

  const REQUEST_ID_URL = `http://papers.community/api/Requests/${item.id}`

  const postReaction = (reaction) => {
    axios.post(`${REQUEST_ID_URL}/${reaction}`, {},  {
      headers: {
        'Content-Type': 'application/json',
        'X-Tenant': communityID,
        Authorization: `Bearer ${localStorage.access}`
      }
    })
  }

  const deleteReaction = (reaction) => {
    axios.delete(`${REQUEST_ID_URL}/${reaction}`,  {
      headers: {
        'Content-Type': 'application/json',
        'X-Tenant': communityID,
        Authorization: `Bearer ${localStorage.access}`
      }
    })
  }

  return (
    <details className={`request-list__item request ${isOpened ? 'request_opened' : ''}`} onClick={() => setIsOpened(!isOpened)}>
      <summary className='request__summary'>
        <h2 className='request__title'>{item.topic}</h2>
        <span className='request__author'>{item.requesterName}</span>
        <div className='request__reaction-block request-reaction'>
          <button
            className={`request-reaction__button request-reaction__button_accept ${isAccept ? 'request-reaction__button_active' : ''}`}
            onClick={() => {
              setIsAccept(!isAccept)
              if (!isAccept) {
                postReaction('thumbs-up')
                setAcceptAmount(acceptAmount + 1)
                setRejectAmount(rejectAmount === 0 ? 0 : rejectAmount - 1)
                setIsReject(false)
              } else {
                deleteReaction('thumbs-up')
                setAcceptAmount(acceptAmount - 1)
              }
            }}
          >
            <Like />
            <span
              className='request-reaction__count request-reaction__count_accept'
            >
            {acceptAmount ? acceptAmount : 0}
          </span>
          </button>
          <button
            className={`request-reaction__button request-reaction__button_reject ${isReject ? 'request-reaction__button_active' : ''}`}
            onClick={() => {
              if (!isReject) {
                postReaction('thumbs-down')
                setIsReject(!isReject)
                setRejectAmount(rejectAmount + 1)
                setIsAccept(false)
                setAcceptAmount(acceptAmount === 0 ? 0 : acceptAmount - 1)
              } else {
                deleteReaction('thumbs-down')
                setRejectAmount(rejectAmount - 1)
              }
            }}
          >
            <Like />
            <span className='request-reaction__count request-reaction__count_reject'>
            {rejectAmount ? rejectAmount : 0}
          </span>
          </button>
        </div>
      </summary>
      <div className='request__content'>
        <p className='request__abstract'>
          {abstract}
        </p>
        <div className='request__decision-block'>
          <button
            type='button'
            className='request__decision request__decision_accept'
            onClick={(e) => e.preventDefault}
          >
            Accept
          </button>
          <button
            type="button"
            className='request__decision request__decision_reject'
            onClick={(e) => e.preventDefault}
          >
            Reject
          </button>
        </div>
      </div>
    </details>
  )
}

const items = [
  {
    name: 'I\'m a cat',
    author: 'Bob The Greatest Cat',
    abstract: 'How to be a purrrfect developer',
    accept: 0,
    reject: 0
  },
  {
    name: 'Along long time ago in a Galaxy far far away...',
    author: 'Lord Voldemort',
    abstract: 'There is my son, Luke. And I\'m his father. Get out, Harry! Luke, ya tvoi otec.',
    accept: 0,
    reject: 0
  },
  {
    name: 'Миграция с изоморфного приложения на статический генератор (GatsbyJS) на примере revolut.com',
    author: 'Эраст Петрович',
    abstract: 'А здесь мы будем писать длинное-предлинное описание на русском языке. Ведь кто, как не мы, будет тестировать вёрстку на переполнение контентом. Вообще, здесь должно быть максимум 150 символов, но кто знает - нужно предусмотреть любые варианты.',
    accept: 0,
    reject: 0
  }
]

const RequestList = ({requests, communityID}) => {

  return (
    <section className='request-list'>
      <h1 className='visually-hidden'>Requests list</h1>
      { requests.length === 0
        ?
        <p>There is no requests yet :(</p>
        :
        requests.map(item => <Request item={item} communityID={communityID} />)
      }
    </section>
  )
}

export default RequestList;
