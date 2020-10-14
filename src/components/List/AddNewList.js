import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Button } from 'components';

const COPY = { 
  ADD_NEW_LIST: 'Add new list...', 
}

class AddNewList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      count:1
    }
    this.handleAddNewList = this.handleAddNewList.bind(this);
  }

  handleAddNewList() {
    const { createNewList } = this.props,
          { count } = this.state,
          listObj = {
            id: uuid4(),
            name: `List ${count}`
          };
    createNewList(listObj)
    this.setState(({count:count+1}));
  }


  render() {
    const { addNewList } = this.props;

    return (
      <article className="components-list">     
        <Button 
          styleType="action"
          onClick={this.handleAddNewList}
        >
          {COPY.ADD_NEW_LIST}          
        </Button>    
      </article>
    );
  }
}

AddNewList.propTypes = {
  createNewList: PropTypes.func
}

export default AddNewList;
