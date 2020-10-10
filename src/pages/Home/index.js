import React from 'react';
import { Button, Card, List } from 'components';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists:[]
    }
  }
  render() {
    const { lists } = this.state;
    return(
      <>
       {
         !lists.length && <List addNewList />
       }
       <List addNewList />        
      </>
    )
  }
}

export default Home;