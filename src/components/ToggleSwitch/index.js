import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToggleSwitch extends React.Component {
  render() {
    const { children, onChange } = this.props;
    return (
      <div className="components-toggle-switch">
       <span className="hint">{children}</span>
        <label className="switch">
          <input type="checkbox" onChange={ onChange } />
          <span className="slider round"></span>
        </label>        
      </div>
    );
  }
};

ToggleSwitch.propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func
}

export default ToggleSwitch;