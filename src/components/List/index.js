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
      count: 0
    }
    this.handleDeleteList = this.handleDeleteList.bind(this);
    this.handleAddNewCard = this.handleAddNewCard.bind(this);
  }
  
  handleDeleteList() {
    const { deleteList, list: {id} } = this.props;
    deleteList(id)

  }

  handleAddNewCard() {
    const { createNewCard } = this.props,
    { count } = this.state,
    newCard = {
       id: uuid4(),
       title: `Card ${count}`
     };
     createNewCard(newCard);
     this.setState({count: count+1});
     
  }

 


  render() {
    const { list, cards } = this.props;
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
};

List.defaultProps = {
   cards: []
};

List.propTypes = {
  cards: PropTypes.array,
  createNewCard: PropTypes.func,
  deleteList: PropTypes.func,
  list: PropTypes.object
};

export default List;