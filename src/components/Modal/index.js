import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: null
    }
  }
  componentDidMount() {
    // If target div is present del it first
    let target = document.getElementById('overlay');
    target && target.remove();    
     target = document.createElement('div');
    target.id = "overlay";
    target.classList.add("overlay");
    document.getElementById("root").classList.add("overlay-open");
    document.body.appendChild(target);
    this.setState({
       modal: target
    });
  }

  componentDidUpdate() {
    const {modal } = this.state;
    const { children, className } = this.props;
    modal && (
       ReactDOM.render(
         <article className={`components-modal ${className}`}>
           {children}
         </article>, modal
       )
    )
  }

  componentWillUnmount() {
     const {modal } = this.state;
     modal && modal.remove();
     document.getElementById("root").classList.remove("overlay-open");
  }
  render() {
    return null;
  }
}

Modal.defaultProps = {
   className: ''
}

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default Modal;