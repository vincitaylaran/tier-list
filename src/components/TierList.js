import React, { Component } from "react";
import styled from "styled-components";

import Item from "./Item";

import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  background-color: black;
  padding: 0.04rem;
  margin-bottom: 1rem;
`;

const Row = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;

  display: flex;
  flex-direction: row;
  border-color: black;
  border-width: 1px;
  border-style: solid;
`;

const Value = styled.div`
  background-color: ${(props) => (props.color ? props.color : "#FFF")};
  width: 9%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.05rem;
  font-family: 15px arial;
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
              <Value color={row.tierColor}>{row.tier}</Value>
              <Droppable droppableId={row.id + row.tier} direction="horizontal">
                {(provided) => (
                  <Items
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    color={row.itemsContainerColor}
                  >
                    {row.items.map((item, index) => (
                      <Item
                        key={index}
                        index={index}
                        value={item.value[0] + item.id}
                        color="lightblue"
                      />
                    ))}
                    {provided.placeholder}
                  </Items>
                )}
              </Droppable>
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
