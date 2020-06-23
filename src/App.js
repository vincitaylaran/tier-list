import React, { Component } from "react";

import { initialData as data } from "./initial-data";

import TierList from "./components/TierList";
import Items from "./components/Items";

import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = { rows: data.rows, items: data.items };

  onDragStart = (required) => {
    const { source, destination } = required;

    console.log(required);
    console.log("items BEFORE -> ", this.state.items.list);
  };

  onDragEnd = (required) => {
    const { source, destination } = required;
    let rows = JSON.parse(JSON.stringify(this.state.rows));
    let items = JSON.parse(JSON.stringify(this.state.items));
    let item;
    console.log(required);

    if (source.droppableId === destination.droppableId) {
      return;
    }

    item = items.list.splice(source.index, 1)[0];
    console.log("item -> ", item);

    console.log("items AFTER -> ", items.list);

    rows.forEach((row) => {
      if (`${row.id}${row.tier}` === destination.droppableId) {
        row.items.splice(destination.index, 0, item);
      }
    });

    console.log("rows -> ", rows);

    this.setState({ rows, items });
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
