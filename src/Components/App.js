import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts'
import Activites from './Climbing/Activities'

class App extends Component {
  render(){
    return <Fragment>
      <Header />
      <Activites />
      <Footer />
      </Fragment>
  };
}

export default App;
