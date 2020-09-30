import React from 'react';
import Header from './Header';
import Footer from '../Footer/Footer';


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