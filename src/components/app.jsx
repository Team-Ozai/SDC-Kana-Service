import React from 'react';
import axios from 'axios';
import Banner from './Banner.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return <Banner />
  }
}

export default App;

// .map(banner => <div><Banner banner={banner} key={banner.id} /></div>)}