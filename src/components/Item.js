import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  width: 8%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.05rem;
`;

class Item extends Component {
  render() {
    return (
      <Container>
        <h3>{this.props.value}</h3>
      </Container>
    );
  }
}

export default Item;
