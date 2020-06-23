import React from 'react';
import axios from 'axios';
import Banner from './Banner.jsx';
import Video from './Video.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return <div>
      <div><Banner /></div>
      <br></br>
      <div><Video /></div>
      </div>
  }
}

export default App;

// .map(banner => <div><Banner banner={banner} key={banner.id} /></div>)}