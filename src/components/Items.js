import React, { Component } from "react";
import styled from "styled-components";

import Item from "./Item";

import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class Items extends Component {
  state = {};

  render() {
    return (
      <Droppable
        droppableId={this.props.items.containerId}
        direction="horizontal"
      >
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {this.props.items.list.map((item, index) => (
              <Item
                id={item.id}
                key={item.id}
                index={index}
                value={item.value[0] + item.id}
                color="lightblue"
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    );
  }
}

export default Items;
