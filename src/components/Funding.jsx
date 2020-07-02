import React from 'react';
import axios from 'axios';
import Number from '../style/Number.style.js';
import Pledged from '../style/pledged.style.js';
import Sidetext from '../style/sidebarText.style.js';
import BackerButton from '../style/backerButton.style.js';
import Remind from '../style/remindButton.style.js';

class Funding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      goal: '',
      amount_pledged: null,
      days: null,
      days_text: '',
      backers: null,
      backers_text: ''
    }

    this.getBanner = this.getBanner.bind(this);
  }

  getBanner() {
    axios.get(`http://localhost:3002/api/banner${window.location.pathname}`).then(result => {
      this.setState({
        goal: result.data.goal,
        amount_pledged: result.data.amount_pledged,
        days: result.data.days,
        days_text: result.data.days_text,
        backers: result.data.backers,
        backers_text: result.data.backers_text
      });
    })
  }

  componentDidMount() {
    this.getBanner()
  }

  render() {
    return <div>
          <br></br>
          <div>
            <div><Pledged>{this.state.amount_pledged}</Pledged></div>
            <div><Sidetext>{this.state.goal}</Sidetext></div>
            <br></br>
            <div><Number>{this.state.days}</Number></div>
            <div><Sidetext>{this.state.days_text}</Sidetext></div>
            <br></br>
            <div><Number>{this.state.backers}</Number></div>
            <div><Sidetext>{this.state.backers_text}</Sidetext></div>
          </div>
          <br></br>
          <div><BackerButton>Back this project</BackerButton></div>
          <div><Remind>Remind Me</Remind></div>
      </div>
  }
}

export default Funding;