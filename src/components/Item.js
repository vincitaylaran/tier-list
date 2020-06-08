import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  display: inline-block;
  width: 65px;
  margin: 0.1rem;
  text-align: center;
  background-color: lightgrey;
`;

const Value = styled.h5`
  display: block;
`;

class Item extends Component {
  render() {
    // console.log("<Item /> props -> ", this.props);

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
              <Value>{this.props.itemValue[0] + this.props.itemId}</Value>
            </Container>
          );
        }}
      </Draggable>
    );
  }
}

export default Item;
