import React, { Component } from "react";
import styled from "styled-components";

import Item from "./Item";

import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class Items extends Component {
  state = {};

  render() {
    return (
      <Container>
        {this.props.items.map((item, index) => (
          <Item key={index} value={item.value[0] + item.id} color="lightblue" />
        ))}
      </Container>
    );
  }
}

export default Items;
