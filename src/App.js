import React, { Component } from "react";

import { initialData as data } from "./initial-data";

import TierList from "./components/TierList";
import Items from "./components/Items";

import { DragDropContext } from "react-beautiful-dnd";

import styled from "styled-components";

import { deepCopy, reorder } from "./useful-functions";

/**
 * TODO:
 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  state = { rows: data.rows, items: data.items };

  onDragEnd = (required) => {
    const { source, destination, draggableId } = required;

    if (destination) {
      let rows = JSON.parse(JSON.stringify(this.state.rows));
      let items = JSON.parse(JSON.stringify(this.state.items));

      // if the first element is 'row' then it indicates that an item was dragged and dropped between rows.
      // Each droppable row has a droppable ID that is formatted as such: row-<rowID><rowTier>
      const draggedBetweenRows =
        source.droppableId.split("-")[0] ===
        destination.droppableId.split("-")[0];

      const draggedFromRowToList =
        source.droppableId.split("-")[0] === "row" &&
        destination.droppableId === "items-main";

      if (source.droppableId === destination.droppableId) {
        if (source.droppableId === items.containerId) {
          items = reorder(items, source, destination);
          this.setState({ items });
          return;
        }
      }

      if (draggedBetweenRows) {
        rows = reorder(
          rows,
          source,
          destination,
          draggableId,
          draggedBetweenRows
        );
        this.setState({ rows });
        return;
      }

      if (draggedFromRowToList) {
        let listCopies = reorder(
          rows,
          source,
          destination,
          draggableId,
          draggedBetweenRows,
          draggedFromRowToList,
          items
        );
        rows = listCopies.rows;
        items = listCopies.items;
        this.setState({ rows, items });
        return;
      }

      let updatedRowsAndItems = reorder(
        rows,
        source,
        destination,
        draggableId,
        draggedBetweenRows,
        draggedFromRowToList,
        items
      );

      this.setState({
        rows: updatedRowsAndItems.rows,
        items: updatedRowsAndItems.items,
      });
    }
  };

  onArrowUpClick = (index) => {
    let rows = deepCopy(this.state.rows);
    let row;
    if (!index || index - 1 < 0) return;
    row = rows.splice(index, 1)[0];
    rows.splice(index - 1, 0, row);
    this.setState({ rows });
  };

  onArrowDownClick = (index) => {
    let rows = deepCopy(this.state.rows);
    index = parseInt(index);
    let row;
    if (index < 0 || index + 1 > rows.length) return;
    row = rows.splice(index, 1)[0];
    rows.splice(index + 1, 0, row);
    this.setState({ rows });
    console.log(`Rows: `, rows);
  };

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            <TierList
              rows={this.state.rows}
              onArrowUpClick={this.onArrowUpClick}
              onArrowDownClick={this.onArrowDownClick}
            />
            <Items items={this.state.items} />
          </Container>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
