import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Button } from 'components';

const COPY = { 
  ADD_NEW_LIST: 'Add new list...', 
}

class AddNewList extends Component {
  
  render() {
    const { handleNewList } = this.props;

    return (
      <article className="components-list">     
        <Button 
          styleType="action"
          onClick={ handleNewList }
        >
          {COPY.ADD_NEW_LIST}          
        </Button>    
      </article>
    );
  }
}

AddNewList.propTypes = {
  handleNewList: PropTypes.func
}

export default AddNewList;
