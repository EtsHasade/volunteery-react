
//import React, { useState, useEffect } from 'react';
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadEventis } from '../../store/actions/eventiActions';
import EventiList from '../../cmps/EventiList.jsx'


const Home = ({ history }) => {
  const loggedinUser = {}
  const popularestEventis = useSelector(state => state.eventiModule.popularestEventis)
  const suggestedEventis = useSelector(state => state.eventiModule.suggestedEventis)
  const newestEventis = useSelector(state => state.eventiModule.newestEventis)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadEventis())
  }, [dispatch]);

  const EventisStrip = ({ eventis, title, showAllPath = '/bb' }) => (
    <Fragment>
      <section className={'flex space-between'}>
        <h3>{title}</h3>
        <h3 className={'hover-pointer'} onClick={() => { history.push(showAllPath) }}>
          Show All
        </h3>
      </section>
      <EventiList eventis={eventis} />
    </Fragment>
  )

  return (
    <div className={'home-page'}>
      {/* <eventi-filter @doFilter='routeToEventiFilter' /> */}
      {loggedinUser?.favs && <EventisStrip eventis={suggestedEventis} title={'Suggested for you'} />}
      <EventisStrip eventis={newestEventis} title={'Newest'} />
      <EventisStrip eventis={popularestEventis} title={'Popular'} />
      <section>
        <div className={'articles-row main-a'}>
          <a className={'article a'} href={'#/eventi-app/?term=&key=tags&values=Children'}>
            <div>
              <h2 className={'title'}>Children</h2>
            </div>
          </a>
          <a className={'article b'} href={'#/eventi-app/?term=&key=tags&values=Animals'}>
            <div>
              <h2 className={'title'}>Animals</h2>
            </div>
          </a>
        </div>
        <div className={'articles-row main-b'}>
          <a className={'article c'} href={'#/eventi-app/?term=&key=tags&values=Fun'}>
            <div>
              <h2 className={'title'}>Fun</h2>
            </div>
          </a>
          <a className={'article d'} href={'#/eventi-app/?term=&key=tags&values=Needy'}>
            <div>
              <h2 className={'title'}>Needy</h2>
            </div>
          </a>
        </div>
      </section>
      {/* <global-info /> */}
    </div>

  )
}

export default Home
