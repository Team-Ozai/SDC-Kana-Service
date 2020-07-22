import React from 'react';
import axios from 'axios';
import cors from 'cors';
import Location from '../style/location.style.js';

class Social extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: ''
    }

    this.getBanner = this.getBanner.bind(this);
  }

  getBanner() {
    axios.get(`http://18.215.78.52:3002/api/banner${window.location.pathname}`).then(result => {
      this.setState({
        location: result.data.location,
      });
    })
  }

  componentDidMount() {
    this.getBanner()
  }

  render() {
    return <div>
      <Location>{'Project We Love'}{`    `}{'Food and Drink'} {this.state.location} {'Project Budget'}</Location>
      </div>
  }
}

export default Social;
