import React from 'react';
import { AddNewList, List, ToggleSwitch } from 'components';

const COPY = {
   HORIZONTAL_VIEW: 'Horizontal View',
   VERTICAL_VIEW: 'Vertical View'
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists:[],
      toggle: false
    }
    this.createNewList = this.createNewList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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
  handleToggle(event) {
     const {target: { checked }} = event;
     this.setState({
       toggle: checked
     })

  }

  render() {
    const { lists, toggle } = this.state;
    console.log('this.state>>>>>>>>>', this.state.toggle)
  
    return(
      <React.Fragment>
        <ToggleSwitch 
          onChange={ this.handleToggle } 
        >
          { toggle && COPY.VERTICAL_VIEW || COPY.HORIZONTAL_VIEW }
        </ToggleSwitch>
        <div className={`dynamic-lists ${toggle && 'vertical' || ''}`}>
          {
            lists.map((list) =>  ( 
              <div key={list.id} >
                <List               
                  list={list} 
                  deleteList={this.deleteList}
                />
              </div>
            ))
          }
          <div>
            <AddNewList 
              createNewList={this.createNewList} 
            />
          </div>        
        </div>
      </React.Fragment>
    )
  }
}

export default Home;