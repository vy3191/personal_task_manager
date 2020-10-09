import React from 'react';

class Button extends React.Component {
  render() {
    return(
      <React.Fragment>
        <button className={`button ${buttonMode ? '': 'hideButton'}`}>
          {this.props.children}
        </button>
      </React.Fragment>
    )
  }
}

export default Button;