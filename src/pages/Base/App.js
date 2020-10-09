import React from 'react';
import { Header } from 'components';
// import {default as Home } from './Home';
import Home from '../Home';
import { hot as horReloader } from 'react-hot-loader/root';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';


class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <section className="container">
          <Home />   
        </section>        
      </>
    )
  }
}

export default horReloader(App);