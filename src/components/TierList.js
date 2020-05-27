import React, { Component } from "react";

import { initialData } from "../initial-data";

import Table from "./Table";
import ItemsGrid from "./ItemsGrid";

import { DragDropContext } from "react-beautiful-dnd";

class TierList extends Component {
  state = {
    rows: initialData.rows,
    items: initialData.items,
  };

  onDragEnd = (required) => {};

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Table data={this.state.rows} />
          <ItemsGrid
            data={this.state.items.gridMain.gridItems}
            id={this.state.items.gridMain.gridId}
          />
        </DragDropContext>
      </div>
    );
  }
}

export default TierList;
