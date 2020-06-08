import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Item from "./Item";

const StyledTableRow = styled.tr`
  background-color: ${(props) => props.backgroundColor};
`;

const ValueContainer = styled.td`
  width: 7%;
  text-align: center;
`;

const ItemsContainer = styled.td`
  width: 100%;
  padding-left: 0.1rem;
  background-color: ${(props) => (props.isDraggingOver ? "white" : "#1A1A1A")};
`;

const ValueText = styled.h5``;

const PlaceholderManager = styled.div`
  display: inline-block;
`;

class TableRow extends Component {
  render() {
    return (
      <StyledTableRow backgroundColor={this.props.color}>
        <ValueContainer>
          <ValueText>{this.props.tierValue}</ValueText>
        </ValueContainer>
        <Droppable droppableId={this.props.id} direction="horizontal">
          {(provided, snapshot) => (
            <ItemsContainer
              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.items.map((item, index) => {
                return (
                  <Item
                    key={index}
                    itemValue={item.name}
                    itemId={item.itemId}
                  />
                );
              })}
              {provided.placeholder}
            </ItemsContainer>
          )}
        </Droppable>
      </StyledTableRow>
    );
  }
}

export default TableRow;
