import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Modal } from 'components';

const COPY = {
  ADD_NEW_LIST: 'Add new list',
  CLOSE_BUTTON: 'Close',
  INPUT_LABEL: 'List Title',
  SAVE_BUTTON: 'Save'
}

class ListOverlay extends Component {
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
    const { handleSave } = this.props,
          { inputValue } = this.state;
    
    handleSave(event, inputValue);         
  }

  handleTitleInputChange(event) {
    const { target: { value: inputValue}} = event;

    this.setState({ inputValue });
  }

  render() {
    const { handleClose } = this.props;
    
    return (
      <Modal className="home-overlay-modal">
      <h1>{COPY.ADD_NEW_LIST}</h1>
      <div className="field">
        <label htmlFor="title">{COPY.INPUT_LABEL}</label>
        <Input 
          id="title"
          name="title"
          onChange={ this.handleTitleInputChange }
        />
      </div>
      <div className="button-group">
        <Button
          onClick={ this.handleClose }
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

ListOverlay.propTypes ={
  handleSave: PropTypes.func,
  handleClose: PropTypes.func
}

export default ListOverlay;