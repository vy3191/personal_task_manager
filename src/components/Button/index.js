import React from 'react';

class Button extends React.Component {
  render() {
    return(  
        <button className={`button ${buttonMode ? 'show-button': 'hide-button'}`}>
          {this.props.children}
        </button>
    )
  }
}

export default Button;