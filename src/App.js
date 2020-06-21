import React, { Component } from "react";

import { initialData as data } from "./initial-data";

import TierList from "./components/TierList";

class App extends Component {
  state = { rows: data.rows, items: data.items };

  render() {
    return (
      <div>
        <TierList rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
