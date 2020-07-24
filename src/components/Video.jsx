import React from 'react';
import axios from 'axios';
import cors from 'cors';
import Background from '../style/background.style.js';
import Funding from './Funding.jsx'
import MidWrapper from '../style/midWrapper.style.js';
import Videodiv from '../style/videoDiv.style.js';

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
    axios.get(`hhttp://54.235.14.252:3002/api/video${window.location.pathname}`).then(result => {
      this.setState({
        title: result.data[0].title,
        description: result.data[0].description,
        video_url: result.data[0].video_url,
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