import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(event) {

  }

  handleChange(event) {

  }

  handleBlur(event) {

  }

  render() {
    const { className, id, type } = this.props;

    return (
      <div className="components-input">
        <input
          className={ className }
          id={ id }
          name={ name || id }
          type={ type }
          onBlur={ this.handleBlur }
          onChange={ this.handleChange }
          onFocus={ this.handleFocus }
        />        
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string
};

export default Input;
