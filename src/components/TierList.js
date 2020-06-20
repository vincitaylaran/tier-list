import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  width: 100%;
  background-color: lightgrey;

  display: flex;
`;

const Value = styled.div`
  background-color: blue;
  width: 9%;

  display: flex;
  justify-content: center;
`;

const Items = styled.div`
  display: flex;
  background-color: orange;
  width: 89%;
`;

const Item = styled.div`
  background-color: red;
`;

const Actions = styled.div`
  display: flex;
  background-color: lightgreen;
`;

const Action = styled.div``;

class TierList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Value>
            <h1>S</h1>
          </Value>
          <Items>
            <Item>
              <h3>Item 1</h3>
            </Item>
            <Item>
              <h3>Item 2</h3>
            </Item>
            <Item>
              <h3>Item 3</h3>
            </Item>
          </Items>
          <Actions>
            <Action>
              <h3>A1</h3>
            </Action>
            <Action>
              <h3>A2</h3>
            </Action>
          </Actions>
        </Row>
      </Container>
    );
  }
}

export default TierList;
