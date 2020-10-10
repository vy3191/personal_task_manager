import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';

const COPY = {
  ADD_NEW_CARD: 'Add new card....',
  ADD_NEW_LIST: 'Add new list...',
  DELETE_LIST: 'Delete this list'
}

class List extends Component {

  handleAddNewList(event) {
    console.log('create a new list')
  }

  handleDeleteList(event) {
    console.log('deleting a  list')
  }

  handleAddNewCard(event) {
    console.log('creating a new card')
  }


  render() {
    const { addNewList,name } = this.props;
    return (
      <article className="components-list">
      {
        addNewList && (
          <Button 
            styleType="action"
            onClick={this.handleAddNewList}
          >
            {COPY.ADD_NEW_LIST}          
          </Button>
        ) || (
          <React.Fragment>
             <div className="components-list-heading">
                <p>{name}</p>
                <Button 
                  onClick={ this.handleDeleteList }
                >
                  {COPY.DELETE_LIST}          
                </Button>                
             </div>
             <Button 
                  styleType="action"
                  onClick={ this.handleAddNewCard }
                >
                  {COPY.ADD_NEW_CARD}          
              </Button>
          </React.Fragment>
        )
      }
      </article>
    );
  }
}

List.propTypes = {
  addNewList:PropTypes.bool
}

export default List;