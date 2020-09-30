import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';


class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div>This is the body of the application</div>
        <Footer />
      </div>
    )
  }
}

export default App;