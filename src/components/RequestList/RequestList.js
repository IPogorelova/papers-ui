import React from 'react';
import { ReactComponent as Overview } from '../../images/icons/overview.svg'

const Request = ({item}) => {
  return (
    <div className='request-list__item request'>
      <h2 className='request__title'>{item.name}</h2>
      <span className='request__author'>{item.author}</span>
      <div className='request__reaction-block'>
        <div className='request__reaction request-reaction'>
          <button className='request-reaction__button request-reaction__button_accept'>+</button>
          <span className='request-reaction__count request-reaction__count_accept'>
            {item.accept ? item.accept : '00'}
          </span>
        </div>
        <div className='request__reaction request-reaction'>
          <button className='request-reaction__button request-reaction__button_reject'>-</button>
          <span className='request-reaction__count request-reaction__count_reject'>
            {item.reject ? item.reject : '00'}
          </span>
        </div>
      </div>
      <div className='request__content'>
        <p className='request__abstract'>{item.abstract}</p>
        <div className='request__decision-block'>
          <button className='request__decision request__decision_accept'>Accept</button>
          <button className='request__decision request__decision_reject'>Reject</button>
        </div>
      </div>
    </div>
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
      <button className='request-list__button'>+</button>
      {
        items.map(item => <Request item={item}/>)
      }
    </section>
  )
}

export default RequestList;
