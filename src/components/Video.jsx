import React from 'react';
import axios from 'axios';

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
    axios.get('api/video').then(result => {
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
      <iframe src={this.state.video_url}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
      />
      </div>
  }
}

export default Video;