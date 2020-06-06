import React, { Component } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 10rem;
  margin: 0.05rem;

  ${({ color = chroma.random() }) => css`
    background-color: ${color};
  `}
`;

const Value = styled.h5`
  display: block;
`;

class Item extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.itemId}
        index={Number(this.props.itemId)}
      >
        {(provided) => {
          return (
            <Container
              key={this.props.itemId}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Value>{this.props.itemId}</Value>
            </Container>
          );
        }}
      </Draggable>
    );
  }
}

export default Item;
