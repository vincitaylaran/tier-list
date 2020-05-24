import React, { Component } from "react";

import { initialData } from "../initial-data";

import Table from "./Table";

class TierList extends Component {
  state = {
    rows: initialData,
  };

  render() {
    return <Table data={this.state.rows} />;
  }
}

export default TierList;
