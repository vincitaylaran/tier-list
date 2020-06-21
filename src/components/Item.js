import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => (props.color ? props.color : "red")};
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 0.05rem;
  margin-right: 0.05rem;
`;

class Item extends Component {
  render() {
    return (
      <Container color={this.props.color}>
        <h3>{this.props.value}</h3>
      </Container>
    );
  }
}

export default Item;
