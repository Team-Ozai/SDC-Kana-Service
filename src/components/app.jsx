import React from 'react';
import axios from 'axios';
import Funding from './Funding.jsx';
import Banner from './Banner.jsx';
import Video from './Video.jsx';
import Social from './Social.jsx';
import MidWrapper from '../style/midWrapper.style.js';
import Background from '../style/background.style.js';

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return <div style={{fontFamily: `"Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif`}}><Background>
      <div><Banner /></div>
      <div><MidWrapper>
        <Video /><Funding />
      </MidWrapper>
      </div>
      <div><Social /></div>
    </Background>
      </div>
  }
}

export default App;