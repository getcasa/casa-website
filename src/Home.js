import React from 'react'

export default function Home() {
  return (
    <div className='home'>
      <div className='description'>
        Smart <span>home</span> automations
      </div>
      <div className='downloads'>
        <div className='row'>
          <a href='https://github.com/getcasa' target='_blank' rel='noopener noreferrer' className='mr-2'>
            <div className='button'>
              <img src='/google-play.svg' alt='Google play' className='mr-1' />
              <span>Download for android</span>
            </div>
          </a>
          <a href='https://github.com/getcasa' target='_blank' rel='noopener noreferrer'>
            <div className='button'>
              <img src='/apple.svg' alt='App store' className='mr-1' />
              <span>Download for ios</span>
            </div>
          </a>
        </div>
      </div>
      <div className='separator' />
      <div className='container'>
        <div className='centered'>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}