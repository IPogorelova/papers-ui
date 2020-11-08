import React from 'react';
import { ReactComponent as Like } from '../../images/icons/like.svg'

const Request = ({item}) => {
  const [ isOpened, setIsOpened ] = React.useState(false);
  const [ isAccept, setIsAccept ] = React.useState(false);
  const [ acceptAmount, setAcceptAmount ] = React.useState(item.accept);
  const [ isReject, setIsReject ] = React.useState(false);
  const [ rejectAmount, setRejectAmount ] = React.useState(item.reject);

  return (
    <details className={`request-list__item request ${isOpened ? 'request_opened' : ''}`} onClick={() => setIsOpened(!isOpened)}>
      <summary className='request__summary'>
        <h2 className='request__title'>{item.name}</h2>
        <span className='request__author'>{item.author}</span>
        <div className='request__reaction-block request-reaction'>
          <button
            className={`request-reaction__button request-reaction__button_accept ${isAccept ? 'request-reaction__button_active' : ''}`}
            onClick={() => {
              setIsAccept(!isAccept)
              setAcceptAmount(!isAccept ? acceptAmount + 1 : acceptAmount - 1)
              setIsReject(false)
              setRejectAmount(rejectAmount === 0 ? 0 : rejectAmount - 1)
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
              setIsReject(!isReject)
              setRejectAmount(!isReject ? rejectAmount + 1 : rejectAmount - 1)
              setIsAccept(false)
              setAcceptAmount(acceptAmount === 0 ? 0 : acceptAmount - 1)
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
        <p className='request__abstract'>{item.abstract}</p>
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

const RequestList = () => {

  return (
    <section className='request-list'>
      <h1 className='visually-hidden'>Requests list</h1>
      {
        items.map(item => <Request item={item}/>)
      }
    </section>
  )
}

export default RequestList;
