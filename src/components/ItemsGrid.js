import React, { Component } from "react";
import Grid from "styled-components-grid";

class ItemsGrid extends Component {
  render() {
    return (
      <Grid>
        {this.props.data.map((item, index) => (
          <Grid.Unit key={index} size={1 / 10}>
            {item.name}
          </Grid.Unit>
        ))}
      </Grid>
    );
  }
}

export default ItemsGrid;
