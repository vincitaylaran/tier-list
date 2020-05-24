import React, { Component } from "react";

import { initialData } from "../initial-data";

import Table from "./Table";
import ItemsGrid from "./ItemsGrid";

class TierList extends Component {
  state = {
    rows: initialData.rows,
    items: initialData.items,
  };

  render() {
    return (
      <div>
        <Table data={this.state.rows} />
        <ItemsGrid data={this.state.items} />
      </div>
    );
  }
}

export default TierList;
