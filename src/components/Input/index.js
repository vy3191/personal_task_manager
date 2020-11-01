import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused:false
    }
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(event) {
    const { onFocus } = this.props;
     this.setState({
       focused: true
     });
     onFocus && onFocus(event);
  }


  handleBlur(event) {
    const {onBlur } = this.props;
     this.setState({
       focused: false
    });
    onBlur && onBlur(event);
     
  }

  getClassName() {
    const { className } = this.props,
            { focused } = this.state;
    return [
      className,
      focused && 'focused'      
    ].filter( v => v).join(' ');
  }
  

  render() {
    const { id, onChange, type } = this.props,
             className = this.getClassName();
   
    return (
      <div className="components-input">
        <input
          className={ className }
          id={ id }
          name={ name || id }
          type={ type }
          onBlur={ this.handleBlur }
          onChange={ onChange }
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
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string
};

export default Input;
