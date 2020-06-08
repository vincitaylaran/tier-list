import React, { Component } from "react";

import { initialData } from "../initial-data";

import Table from "./Table";
import ItemsGrid from "./ItemsGrid";

import { DragDropContext } from "react-beautiful-dnd";

import styled from "styled-components";

const Container = styled.div``;

class TierList extends Component {
  state = {
    rows: initialData.rows,
    items: initialData.items,
  };

  onDragEnd = (required) => {
    const { source, destination } = required;

    // create deep copies of the 'rows' and 'items' in state.
    let rows = JSON.parse(JSON.stringify(this.state.rows));
    let items = JSON.parse(JSON.stringify(this.state.items));
    let item;

    if (
      source.droppableId === destination.droppableId &&
      source.index !== destination.index
    ) {
      // TODO: write logic to rearrange items if dropped in the same droppable.
      console.log("is in same droppable");

      return;
    }

    item = items.gridMain.gridItems.splice(source.index - 1, 1)[0];

    rows.forEach((row) => {
      if (row.rowId === destination.droppableId) {
        row.items.splice(destination.index - 1, 0, item);
      }
    });

    this.setState({ rows, items });
  };

  render() {
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Table data={this.state.rows} />
          <ItemsGrid
            data={this.state.items.gridMain.gridItems}
            id={this.state.items.gridMain.gridId}
          />
        </DragDropContext>
      </Container>
    );
  }
}

export default TierList;
