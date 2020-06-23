import React from 'react';
import axios from 'axios';

class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title : ''
    }

    this.getBanner = this.getBanner.bind(this);
  }

  getBanner() {
    axios.get('api/banner').then(result => {
      this.setState({
        title: result.data.title
      });
    })
  }

  componentDidMount() {
    this.getBanner()
  }

  render() {
    return <div>{this.state.title}</div>
  }
}

export default Banner;
