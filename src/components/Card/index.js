import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {imgAlt, imgScr, title} = this.props;
    return (
      <article className="components-card">
        <p className={title}>{title}</p>
        {imgScr && <img src={imgScr} alt={imgAlt} />}
      </article>
    );
  }
}

Card.defaultProps = {
  imgAlt:''
}

Card.propTypes = {
  imgAlt: PropTypes.string,
  imgScr: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Card;