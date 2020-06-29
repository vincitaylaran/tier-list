import React, { Component } from "react";

import { initialData as data } from "./initial-data";

import TierList from "./components/TierList";
import Items from "./components/Items";

import { DragDropContext } from "react-beautiful-dnd";

import styled from "styled-components";

/**
 * TODO:
 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  state = { rows: data.rows, items: data.items };

  onDragEnd = async (required) => {
    console.log("REQUIRED object: ", required);

    const { source, destination, draggableId } = required;

    if (destination) {
      let rows = JSON.parse(JSON.stringify(this.state.rows));
      let items = JSON.parse(JSON.stringify(this.state.items));
      let item;

      // if the first element is 'row' then it indicates that an item was dragged and dropped between rows.
      // Each droppable row has a droppable ID that is formatted as such: row-<rowID><rowTier>
      const draggedBetweenRows =
        source.droppableId.split("-")[0] ===
        destination.droppableId.split("-")[0];

      const draggedFromRowToList =
        source.droppableId.split("-")[0] === "row" &&
        destination.droppableId === "items-main";

      // if user rearranges the items within the items container.
      if (source.droppableId === destination.droppableId) {
        console.log("TO: item list\nFROM: item list");

        if (source.droppableId === items.containerId) {
          item = items.list.splice(source.index, 1)[0];
          items.list.splice(destination.index, 0, item);
          this.setState({ items });
          return;
        }
      }

      if (draggedBetweenRows) {
        let rowItem;
        console.log(
          `TO: row with droppableID '${destination.droppableId}'\nFROM: row with droppableID '${destination.droppableId}'`
        );

        rows.forEach((row) => {
          if (`row-${row.id}${row.tier}` === source.droppableId) {
            row.items.forEach((item, index) => {
              if (item.id === draggableId) {
                rowItem = row.items.splice(index, 1)[0];
                console.log("item: ", rowItem);
              }
            });
          }
        });

        rows.forEach((row) => {
          if (`row-${row.id}${row.tier}` === destination.droppableId) {
            row.items.splice(destination.index, 0, rowItem);
          }
        });

        this.setState({ rows, items });
        return;
      }

      if (draggedFromRowToList) {
        let rowItem;
        console.log(
          `TO: item list\nFROM: row with droppableID '${source.droppableId}'`
        );

        rows.forEach((row) => {
          if (`row-${row.id}${row.tier}` === source.droppableId) {
            row.items.forEach((item, index) => {
              if (item.id === draggableId) {
                rowItem = row.items.splice(index, 1)[0];
                console.log("item: ", rowItem);
              }
            });
          }
        });

        items.list.splice(destination.index, 0, rowItem);
        this.setState({ rows, items });

        return;
      }

      console.log(
        `TO: row with droppableID '${destination.droppableId}'\nFROM: item list`
      );

      item = items.list.splice(source.index, 1)[0];

      rows.forEach((row) => {
        if (`row-${row.id}${row.tier}` === destination.droppableId) {
          row.items.splice(destination.index, 0, item);
        }
      });

      // console.log(required);

      await this.setState({ rows, items });
    }
  };

  onArrowUpClick = (index) => {
    let rows = JSON.parse(JSON.stringify(this.state.rows));
    let row;
    if (!index || index - 1 < 0) return;
    row = rows.splice(index, 1)[0];
    rows.splice(index - 1, 0, row);
    this.setState({ rows });
  };

  onArrowDownClick = (index) => {
    let rows = JSON.parse(JSON.stringify(this.state.rows));
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
