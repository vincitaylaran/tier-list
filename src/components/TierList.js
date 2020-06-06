import React, { Component } from "react";

import { initialData } from "../initial-data";

import Table from "./Table";
import ItemsGrid from "./ItemsGrid";

import { DragDropContext } from "react-beautiful-dnd";

import styled from "styled-components";

const Container = styled.div``;

const TableContainer = styled.div`
  background-color: black;
  margin-bottom: 1rem;
`;

class TierList extends Component {
  state = {
    rows: initialData.rows,
    items: initialData.items,
  };

  onDragEnd = async (required) => {
    const { source, destination } = required;

    // create deep copies of the 'rows' and 'items' in state.
    let rows = JSON.parse(JSON.stringify(this.state.rows));
    let items = JSON.parse(JSON.stringify(this.state.items));

    let item = items.gridMain.gridItems.splice(source.index - 1, 1)[0];

    rows.forEach((row) => {
      if (row.rowId === destination.droppableId) {
        row.items.splice(destination.index - 1, 0, item);
      }
    });

    await this.setState({ rows });
  };

  render() {
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <TableContainer>
            <Table data={this.state.rows} />
          </TableContainer>
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
