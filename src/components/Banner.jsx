import React from 'react';
import axios from 'axios';

class Banner extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title : '',
      description: '',
      goal: '',
      amount_pledged: null,
      days: null,
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
      <div>{this.state.title}</div>
      <div>{this.state.description}</div>
      <div>{this.state.goal}</div>
      <div>{this.state.amount_pledged}</div>
      <div>{this.state.days}</div>
      <div>{this.state.location}</div>
      <div>{this.state.backers}</div>
      <div>{this.state.backers_text}</div>
      </div>
  }
}

export default Banner;
