import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

class Card extends Component {
  render() {
    const { card: {id, imgAlt="", imgSrc, title}, index } = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {
          (provided) => (
            <div
             { ...provided.draggableProps}
             { ...provided.dragHandleProps}
             ref= {provided.innerRef}
            >
              <article className="components-card">
                <p className={title}>{title}</p>
                {imgSrc && <img src={imgSrc} alt={imgAlt} />}
              </article>
            </div>
          )
        }
      </Draggable>
    );
  }
}


Card.propTypes = {
  card: PropTypes.any,
  index: PropTypes.number
}

export default Card;