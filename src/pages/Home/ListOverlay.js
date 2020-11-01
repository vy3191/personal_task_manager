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

  render() {
    return (
      <Modal className="home-overlay-modal">
      <h1>{COPY.ADD_NEW_LIST}</h1>
      <div className="field">
        <label htmlFor="title">{COPY.INPUT_LABEL}</label>
        <Input 
          id="title"
          name="title"
        />
      </div>
      <div className="button-group">
        <Button>
          {COPY.CLOSE_BUTTON}
        </Button> 
        <Button>
          {COPY.SAVE_BUTTON}
        </Button>
      </div>

      </Modal>
    );
  }
}

ListOverlay.propTypes ={

}

export default ListOverlay;