import React from 'react';
import axios from 'axios';
import Funding from './Funding.jsx';
import Banner from './Banner.jsx';
import Video from './Video.jsx';
import Social from './Social.jsx';
import Videodiv from '../style/videoDiv.style.js';
import MidWrapper from '../style/midWrapper.style.js';
import Background from '../style/background.style.js';
import Youtubes from '../../youtube/youtube.js';
// import style from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return <div><Background>
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