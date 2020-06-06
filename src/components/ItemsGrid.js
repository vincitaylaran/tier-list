import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Item from "./Item";

const Grid = styled.div`
  display: flex;
`;

class ItemsGrid extends Component {
  render() {
    return (
      <Droppable droppableId={this.props.id} direction="horizontal">
        {(provided) => {
          return (
            <Grid ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.data.map((item) => (
                <Item
                  key={item.itemId}
                  itemId={item.itemId}
                  itemValue={item.name}
                />
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
