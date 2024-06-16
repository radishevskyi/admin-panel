import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faBell, faUser } from '@fortawesome/free-regular-svg-icons';

function Index() {
  return (
    <>
      <Head>
        <title>Document flow</title>
        <meta name='description' content='content' />
      </Head>
      <main>
        <header>
          <div className='header-item'>
            <button className='header-buttons'>
              <FontAwesomeIcon icon={faDesktop} className='icon' />
            </button>
            <button className='header-buttons'>
              <FontAwesomeIcon icon={faMessage} className='icon' />
            </button>
            <button className='header-buttons'>
              <FontAwesomeIcon icon={faBell} className='icon' />
            </button>
            <button className='header-buttons'>
              <FontAwesomeIcon icon={faSearch} className='icon' />
            </button>
            <button className='header-buttons'>
              <FontAwesomeIcon icon={faUser} className='icon' />
            </button>
          </div>
        </header>
      </main>
    </>
  );
}

export default Index;
