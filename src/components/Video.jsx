import React from 'react';
import axios from 'axios';
import Background from '../style/background.style.js';
import Funding from './Funding.jsx'
import MidWrapper from '../style/midWrapper.style.js';
import Videodiv from '../style/Videodiv.style.js';

class Video extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title : '',
      description: '',
      video_url: ''
    }

    this.getVideo = this.getVideo.bind(this);
  }

  getVideo() {
    axios.get(`/api/videos${window.location.pathname}`).then(result => {
      console.log(result.data);
      this.setState({
        title: result.data.title,
        description: result.data.description,
        video_url: result.data.video_url,
      });
    })
  }

  componentDidMount() {
    this.getVideo()
  }

  render() {
    return <div>
      <Videodiv>
        <iframe src={this.state.video_url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        width={800}
        height={449.98}
        title='video'/>
      </Videodiv>
      </div>
  }
}

export default Video;