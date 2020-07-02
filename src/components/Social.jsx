import React from 'react';
import axios from 'axios';
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
    axios.get(`/api/banners${window.location.pathname}`).then(result => {
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
