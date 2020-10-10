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
      <div className="dynamic-lists">
        <List name="title-one" />
        <List name="title-one" />
        <List name="title-one" />
        <List name="title-one" />
        <List name="title-one" />
        <List name="title-one" />
        <List name="title-one" />
        <List name="title-one" />
        
        <List addNewList />        
      </div>
    )
  }
}

export default Home;