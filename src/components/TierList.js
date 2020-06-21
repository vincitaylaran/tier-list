import React, { Component } from "react";
import styled from "styled-components";

import Item from "./Item";

const Container = styled.div`
  background-color: black;
  padding: 0.04rem;
`;

const Row = styled.div`
  width: 100%;
  background-color: black;

  display: flex;
  flex-direction: row;

  margin: 0.05rem;
`;

const Value = styled.div`
  background-color: ${(props) => (props.color ? props.color : "#FFF")};
  width: 9%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.05rem;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => (props.color ? props.color : "#333")};
  width: 89%;
`;

const Actions = styled.div`
  display: flex;
  background-color: black;
  width: 9%;
  justify-content: center;
  margin: 0.05rem;
  color: white;
  flex-wrap: wrap;
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.05rem;
`;

class TierList extends Component {
  render() {
    return (
      <Container>
        {this.props.rows.map((row, index) => {
          return (
            <Row key={index}>
              <Value color={row.tierColor}>
                <h2>{row.tier}</h2>
              </Value>
              <Items color={row.itemsContainerColor}>
                <Item value="Item 1" />
                <Item value="Item 2" />
                <Item value="Item 3" />
                <Item value="Item 1" />
                <Item value="Item 2" />
                <Item value="Item 3" />
              </Items>
              <Actions>
                <Action>A1</Action>
                <Action>A2</Action>
              </Actions>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default TierList;
