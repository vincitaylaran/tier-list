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
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.05rem;
  font-family: 15px arial;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) =>
    props.isDraggingOver ? "#5e5e5e" : props.color};
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
          const droppableId = `row-${row.id}${row.tier}`;

          return (
            <Row key={index}>
              <Value color={row.tierColor}>{row.tier}</Value>
              <Droppable droppableId={droppableId} direction="horizontal">
                {(provided, snapshot) => (
                  <ItemsContainer
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    color={row.itemsContainerColor}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {row.items.map((item, index) => (
                      <Item
                        id={item.id}
                        key={item.id}
                        index={index}
                        value={item.value[0] + item.id}
                        color="lightblue"
                      />
                    ))}
                    {provided.placeholder}
                  </ItemsContainer>
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
