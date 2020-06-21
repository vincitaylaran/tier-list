import React, { Component } from "react";

import { initialData as data } from "./initial-data";

import TierList from "./components/TierList";
import Items from "./components/Items";

import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = { rows: data.rows, items: data.items };

  onDragEnd(required) {
    console.log(required);
  }

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <TierList rows={this.state.rows} />
          <Items items={this.state.items} />
        </DragDropContext>
      </div>
    );
  }
}

export default App;
