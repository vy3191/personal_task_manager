import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Button } from 'components';

const COPY = {
  ADD_NEW_CARD: 'Add new card....',
  ADD_NEW_LIST: 'Add new list...',
  DELETE_LIST: 'Delete this list'
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state= {
      count:1
    }
    this.handleAddNewList = this.handleAddNewList.bind(this);
    this.handleDeleteList = this.handleDeleteList.bind(this);
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

  handleDeleteList() {
    const { deleteList,list: {id} } = this.props;
    deleteList(id)

  }

  handleAddNewCard(event) {
    console.log('creating a new card')
  }


  render() {
    console.log('this.props', this.props);
    const { addNewList, list  } = this.props;

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
        ) 
      }
      {       
        list &&  (
          <React.Fragment>
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
          </React.Fragment>
        )
      }
      </article>
    );
  }
}

List.propTypes = {
  addNewList:PropTypes.bool,
  createNewList: PropTypes.func,
  deleteList: PropTypes.func,
  list: PropTypes.object
}

export default List;