import React, { Component } from "react";

import { initialData as data } from "./initial-data";

import TierList from "./components/TierList";
import Items from "./components/Items";

import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = { rows: data.rows, items: data.items };

  onDragStart = (required) => {
    const { source, destination, draggableId } = required;
  };

  onDragEnd = async (required) => {
    // console.log("items BEFORE -> ", this.state.items.list);

    const { source, destination, draggableId } = required;
    let rows = JSON.parse(JSON.stringify(this.state.rows));
    let items = JSON.parse(JSON.stringify(this.state.items));
    let item, row;

    // if the first element is 'row' then it indicates that an item was dragged and dropped between rows.
    // Each droppable row has a droppable ID that is formatted as such: row-<rowID><rowTier>
    const draggedBetweenRows =
      source.droppableId.split("-")[0] ===
      destination.droppableId.split("-")[0];

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

    // TODO: write logic when dragging items between different rows.
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
    console.log("state AFTER drop: ", this.state);
  };

  render() {
    return (
      <div>
        <DragDropContext
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <TierList rows={this.state.rows} />
          <Items items={this.state.items} />
        </DragDropContext>
      </div>
    );
  }
}

export default App;
