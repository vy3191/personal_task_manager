import React from 'react';
import {Header, Footer } from 'components';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';


class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div>This is the body of the application</div>
        <h1>Second heading here</h1>
        <Footer />
      </div>
    )
  }
}

export default App;