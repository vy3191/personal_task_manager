import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'components';
import { v4 as uuid4 } from 'uuid';


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
    this.handleAddNewCard = this.handleAddNewCard.bind(this);
  }
  
  handleDeleteList() {
    const { deleteList, list: {id} } = this.props;
    deleteList(id)

  }

  handleAddNewCard() {
     const newCard = {
       id: uuid4(),
       title: 'card'
     };
     this.setState(({cards}) => ({
         cards: [...cards, newCard]
     }));
     console.log('working now')
  }

 


  render() {
    const { list } = this.props;
    const { cards } = this.state;
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
        {
          cards.map( (card) => <Card key={card.id} title={card.title}  />)
        }
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