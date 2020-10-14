import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';

const COPY = {
  ADD_NEW_CARD: 'Add new card....',
  DELETE_LIST: 'Delete this list'
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state= {
      cards: []
    }
    this.handleDeleteList = this.handleDeleteList.bind(this);
  }
  
  handleDeleteList() {
    const { deleteList, list: {id} } = this.props;
    deleteList(id)

  }

  handleAddNewCard(event) {
    console.log('creating a new card')
  }


  render() {
    const { list  } = this.props;
    return (
      <article className="components-list"> 
        <div className="components-list-heading">
          <p>{list.name}</p>
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
      </article>
    );
  }
}

List.propTypes = {
  deleteList: PropTypes.func,
  list: PropTypes.object
}

export default List;