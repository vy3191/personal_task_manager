import React from 'react';
import { AddNewList, Button, Input, Modal, List, ToggleSwitch } from 'components';
import { DragDropContext } from 'react-beautiful-dnd';
import CardOverlay from './CardOverlay';
import ListOverlay from './ListOverlay';

const COPY = {
   HORIZONTAL_VIEW: 'Horizontal View',
   MODAL_CLOSE_BUTTON: 'Close',
   VERTICAL_VIEW: 'Vertical View',

}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: { },   
      cardOverlayForList: null,
      lists:[],
      listCardsMapping: {}, 
      showListOverlay: false,
      toggle: false,
    }
    this.createNewCard = this.createNewCard.bind(this);
    this.createNewList = this.createNewList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleNewList = this.handleNewList.bind(this);
    this.handleAddNewCard = this.handleAddNewCard.bind(this);
    this.handleListOverlayClose = this.handleListOverlayClose.bind(this);
    this.handleCardOverlayClose = this.handleCardOverlayClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  createNewCard(newCard, listID) {
    //  const listCardsMapping = { listID1: [card0], listID2: [card0,c]}
    const { listCardsMapping, cards } = this.state;
    if(listCardsMapping[listID]) {
        listCardsMapping[listID].push(newCard.id);
    }else {
        listCardsMapping[listID] = [newCard.id];
    }

    this.setState({
        cards: { ...cards, [newCard.id]: newCard},   
        listCardsMapping
    });
  }

  filterCards(listID) {
    const { cards, listCardsMapping:{ [listID]: cardsIDS} } = this.state;
    if (!cardsIDS) return [];
    // if (!listCardsMapping[listID]) return [];
    // return cards.filter((card) => listCardsMapping[listID].includes(card.id));
    // Instead of filtering the by cards, we need to filter listCardsMapping to keep the cards order
    return cardsIDS.map( (cardID) => cards[cardID]);
  }
  
  createNewList(list) {
      this.setState(({lists}) => ({
         lists: [...lists,list],
      }))
  }

  handleNewList() {
    this.setState({ showListOverlay: true})
  }

  handleAddNewCard(list) {
    this.setState({
      cardOverlayForList: list
    });
  }

  deleteList(listId) {
         //  const listCardsMapping = { listID1: [card0, card1,card2,card3], listID2: [card0,c]}
        //  const { listID1, listID2, listID3 } = listCardsMapping;
        //  const { ["listID1"]: listID1, ...rest } = listCardsMapping;   #refer these two line for deleting prop from obj dynamically(ES6)
    const { lists, listCardsMapping: { [listId]: deletedCardMapping, ...restOfListCardMapping }, cards } = this.state;
    const index = lists.findIndex(list => list.id === listId);
    deletedCardMapping && deletedCardMapping.map( (deletedCardId) => delete cards[deletedCardId])
    this.setState({
      lists: [...lists.slice(0,index),  ...lists.slice(index+1)],
      listCardsMapping: restOfListCardMapping,
      cards
      // cards: deletedCardMapping && cards.filter((card) => !deletedCardMapping.includes(card.id)) || cards
    });
  //   this.setState(({lists}) => ({
  //     lists: lists.filter(list => list.id !== id)
  //  }))
  }

  onDragEnd(results) {
      const { 
          destination: {droppableId: destinationListId, index: destinationCardIndex},
          draggableId: cardId,
          source: {droppableId: sourceListId, index: sourceCardIndex},
          }= results;
      let { listCardsMapping } = this.state;
      let sourceCardIDs = listCardsMapping[sourceListId]; 

    // {
    //   "draggableId": "b1681c3d-1353-481a-8c60-0f3725122162",
    //   "type": "DEFAULT",
    //   "source": {
    //     "index": 0,
    //     "droppableId": "05cec7c6-58ef-4054-b479-b521ee47acd9"
    //   },
    //   "reason": "DROP",
    //   "mode": "FLUID",
    //   "destination": {
    //     "droppableId": "80d2c6ac-faf8-47c1-928e-0658dd40347b",
    //     "index": 0
    //   },
    //   "combine": null
    // }
    
    // Case i) When source and destination list are same(including the index):
    if(sourceListId === destinationListId && sourceCardIndex === destinationCardIndex)  return;
    // Case ii) When source and destination list are same(different indices):
    if(sourceListId === destinationListId && sourceCardIndex !== destinationCardIndex) {
      //  const listCardsMapping = { listID1: [card0], listID2: [card0,c]} 
      // ***sourceListId and destinationListId are same****
      // const cardIDs = listCardsMapping[sourceListId];  **MovedUp(|)
      // Removing the cardID from the sourceCardIndex 
      sourceCardIDs.splice(sourceCardIndex, 1);
      // Adding the cardID to the destinationCardIndex
      sourceCardIDs.splice(destinationCardIndex, 0, cardId);
      // Re-assigning the updated sourceCardIDs to the listCardsMapping of source list id
      listCardsMapping[sourceListId] = sourceCardIDs;          
    };
    // Case iii) When source and destination list are different
         //  const listCardsMapping = { listID1: [card0, card1,card2,card3], listID2: [card0,c]}
         // Grab the source-cardId from listCardMapping
        if(sourceListId !== destinationListId) {
          const destinationCardIDs = listCardsMapping[destinationListId]
          sourceCardIDs.splice(sourceCardIndex,1);
          // Insert card from source list to destination list
          destinationCardIDs.splice(destinationCardIndex, 0, cardId);
          // Re-assign the listIDs in listMapping **ref line 114**
          listCardsMapping[sourceListId] = sourceCardIDs;
          listCardsMapping[destinationListId] = destinationCardIDs;

        }
    
        this.setState({
          listCardsMapping
        })
  }

  handleToggle(event) {
     const {target: { checked }} = event;
     this.setState({
       toggle: checked
     })

  }

  handleListOverlayClose() {
    this.setState({showListOverlay:false});
  }

  handleCardOverlayClose(){
    this.setState({ cardOverlayForList: null})
  }

  handleInputChange(event) {
        const { value } = event.target;
        console.log('value>>>', value)
  }

  render() {
    const { cardOverlayForList, lists, toggle, showListOverlay } = this.state;
    console.log('this.state>>>>>>>>>', this.state)
     //  const listCardsMapping = { listID1: [card0], listID2: [card0,c]}
    return(
      <React.Fragment>
        <ToggleSwitch 
          onChange={ this.handleToggle } 
        >
          { toggle && COPY.VERTICAL_VIEW || COPY.HORIZONTAL_VIEW }
        </ToggleSwitch>
        <div className={`dynamic-lists ${toggle && 'vertical' || ''}`}>
         <DragDropContext
            onDragEnd={this.onDragEnd}         
         >
          {
            lists.map((list) =>  ( 
              <div key={list.id} >
                <List               
                  list={list} 
                  deleteList={this.deleteList}
                  handleAddNewCard={this.handleAddNewCard}
                  cards={this.filterCards(list.id)}
                  
                />
              </div>
            ))
            }
         </DragDropContext>
          <div>
            <AddNewList 
              handleNewList={this.handleNewList} 
            />
          </div>        
        </div>
        { showListOverlay && <ListOverlay 
          handleClose={ this.handleListOverlayClose }
          handleSave={ this.createNewList }
        />}
        { cardOverlayForList && 
          <CardOverlay 
            list={ cardOverlayForList } 
            handleClose={ this.handleCardOverlayClose }  
            handleSave={ this.createNewCard }
            />}
      </React.Fragment>
    )
  }
}

export default Home;