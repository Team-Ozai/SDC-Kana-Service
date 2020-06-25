import React from 'react';
import axios from 'axios';
import Number from '../style/Number.style.js';
import Title from '../style/title.style.js';
import Description from '../style/description.style.js';
import Pledged from '../style/pledged.style.js';
import Sidetext from '../style/sidebarText.style.js';
import BackerButton from '../style/backerButton.style.js';
import Remind from '../style/remindButton.style.js';
import Location from '../style/location.style.js';
import Fundingdiv from '../style/fundingDiv.style.js';

class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title : '',
      description: '',
      goal: '',
      amount_pledged: null,
      days: null,
      days_text: '',
      location: '',
      backers: null,
      backers_text: ''
    }

    this.getBanner = this.getBanner.bind(this);
  }

  getBanner() {
    axios.get('api/banner').then(result => {
      console.log(result.data);
      this.setState({
        title: result.data.title,
        description: result.data.description,
        goal: result.data.goal,
        amount_pledged: result.data.amount_pledged,
        days: result.data.days,
        days_text: result.data.days_text,
        location: result.data.location,
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
      <div><Title>{this.state.title}</Title></div>
      <div><Description>{this.state.description}</Description></div>
      <div>
        <Fundingdiv>
          <div><Pledged>{this.state.amount_pledged}</Pledged></div>
          <div><Sidetext>{this.state.goal}</Sidetext></div>
          <div><Number>{this.state.days}</Number></div>
          <div><Sidetext>{this.state.days_text}</Sidetext></div>
          <div><Number>{this.state.backers}</Number></div>
          <div><Sidetext>{this.state.backers_text}</Sidetext></div>
        </Fundingdiv>
      </div>
      <div><Location>{this.state.location}</Location></div>
      <div><BackerButton>Back this project</BackerButton></div>
      <div><Remind>Remind Me</Remind></div>
      </div>
  }
}

export default Banner;
