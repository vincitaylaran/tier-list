import React, { Component } from "react";
import styled from "styled-components";

import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  background-color: ${(props) => (props.color ? props.color : "red")};
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: 0.05rem;
  margin-right: 0.05rem;
`;

class Item extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            color={this.props.color}
          >
            <h3>{this.props.value}</h3>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Item;
