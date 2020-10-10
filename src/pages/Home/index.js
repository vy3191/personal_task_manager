import React from 'react';
import { Button, Card, List } from 'components';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists:[]
    }
    this.createNewList = this.createNewList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  
  createNewList(list) {
      this.setState(({lists}) => ({
         lists: [...lists,list]
      }))
  }

  deleteList(id) {
    const { lists } = this.state;
    const index = lists.findIndex(list => list.id === id);
    this.setState({
     lists: [
        ...lists.slice(0,index),
        ...lists.slice(index+1)
    ]      
  })
  //   this.setState(({lists}) => ({
  //     lists: lists.filter(list => list.id !== id)
  //  }))
  }

  render() {
    const { lists } = this.state;
    console.log('this.state>>>>>>>>>', this.state)
    return(
      <div className="dynamic-lists">
      {
        lists.map((list) =>  ( 
          <List 
            key={list.id} 
            list={list} 
            deleteList={this.deleteList}
          />
        ))
      }
      <List 
        addNewList 
        createNewList={this.createNewList} 
      />        
      </div>
    )
  }
}

export default Home;