import React from 'react';
import axios from 'axios';
import Title from '../style/title.style.js';
import Description from '../style/description.style.js';
import BackerButton from '../style/backerButton.style.js';

class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title : '',
      description: '',
    }

    this.getBanner = this.getBanner.bind(this);
  }

  getBanner() {
    console.log(window.location.pathname);
    axios.get(`http://localhost/3002/api/banner${window.location.pathname}`).then(result => {
      console.log(result.data);
      this.setState({
        title: result.data.title,
        description: result.data.description,
        location: result.data.location,
      });
    })
  }

  componentDidMount() {
    this.getBanner()
  }

  render() {
    return <div>
      <div><Title>{this.state.title}</Title></div>
      <div><Description>{this.state.description}</Description></div>
      </div>
  }
}

export default Banner;
