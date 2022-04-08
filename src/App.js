import React from 'react'
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg'
import { ReactComponent as IconGithub } from './assets/icons/github.svg'
import { ReactComponent as IconDiscord } from './assets/icons/discord.svg'
import { ReactComponent as IconGmail } from './assets/icons/gmail.svg'
import { ReactComponent as IconMirror } from './assets/icons/mirror.svg'

import InvisibleEyesLogo from './assets/icons/InvisibleLogo.png'

import './App.css'

class App extends React.Component {
  render = () => {
    return (
      <div className='card'>
        <div className='header'>
          <div className='logo'>
            <a href='.'>Invisible EYEs</a>
          </div>
          <div className='social'>
            <a
              href='https://twitter.com/invsbleEyes'
              title='Twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconTwitter className='icon' />
            </a>
            <a
              href='https://discord.gg/madUctPypY'
              title='Discord'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconDiscord className='icon' />
            </a>
            <a
              href='https://github.com/break-co/'
              title='GitHub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconGithub className='icon' />
            </a>
            <a
              href='mailto:support@invisibleeyes.art'
              title='Gmail'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconGmail className='icon' />
            </a>
            <a
              href='https://mirror.xyz/invisibleeyes.eth'
              title='Mirror'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconMirror className='icon' />
            </a>
          </div>
        </div>
        <div className='content'>
          <div className='title-image'>
            <img src={InvisibleEyesLogo} alt='InvisibleEyes' />
          </div>
          <div className='title-holder'>
            <h1>“Seekers of the magical 🪄 wormhole into the Metaverse”</h1>
            <p>◬Prepare yourself for an eternal awakening to see through◬</p>
          </div>
          <div className="mail-to">
          <a href='mailto:support@invisibleeyes.art'>
            <div className='cta'>Reach out</div>
          </a>
          </div>
        </div>
        <div className='footer'>
          <span>made with ⚡️ by the Guardians of the 🛡 Metaverse 🛡</span>
        </div>
      </div>
    )
  }
}

export default App
