import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import { Button, Input, Modal } from 'components';

const COPY = {
  ADD_NEW_CARD: 'Add new card',
  CLOSE_BUTTON: 'Close',
  CARD_TITLE: 'Card Title',
  SAVE_BUTTON: 'Save'
}

class CardOverlay extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      showModal: true
    };
    
    this.handleSaveModal = this.handleSaveModal.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
  }

  handleSaveModal(event) {
    const { handleSave, handleClose, list: { id } } = this.props,
          { inputValue } = this.state;

    let result; 

    inputValue && (
        result = {
        id: uuid4(),
        title: inputValue
      }, 
      handleSave(result, id),
      handleClose()
    );        
  
 }

  handleTitleInputChange(event) {
    const { target: { value: inputValue}} = event;

    this.setState({ inputValue });
  }

  render() {
    const { handleClose } = this.props;

    return (
      <Modal className="home-overlay-modal">
      <h1>{COPY.ADD_NEW_CARD}</h1>
      <div className="field">
        <label htmlFor="title">{COPY.CARD_TITLE}</label>
        <Input 
          id="title"
          name="title"
          onChange={ this.handleTitleInputChange }
        />
      </div>
      <div className="button-group">
        <Button
          onClick={ handleClose }
        >
          {COPY.CLOSE_BUTTON}
        </Button> 
        <Button 
          onClick={ this.handleSaveModal }
        >
          {COPY.SAVE_BUTTON}
        </Button>
      </div>

      </Modal>
    );
  }
}

CardOverlay.propTypes ={
  handleSave: PropTypes.func,
  handleClose: PropTypes.func
}

export default CardOverlay;