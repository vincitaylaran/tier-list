import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Item from "./Item";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  grid-column-gap: 0.1rem;
  grid-row-gap: 0.1rem;
`;

class ItemsGrid extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.id}>
        {(provided) => {
          return (
            <Grid ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.data.map((item) => (
                <Item key={item.itemId} itemId={item.itemId} />
              ))}
              {provided.placeholder}
            </Grid>
          );
        }}
      </Droppable>
    );
  }
}

export default ItemsGrid;
