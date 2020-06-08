import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Item from "./Item";

const StyledTableRow = styled.tr``;

const ValueColumn = styled.td`
  width: 7%;
  text-align: center;
  background-color: ${(props) => (props.color ? props.color : "lightgrey")};
`;

const ItemsColumn = styled.td`
  background-color: #1a1a1a;
`;

const ItemsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ValueContainer = styled.div``;

const ValueText = styled.h5``;

class TableRow extends Component {
  render() {
    return (
      <StyledTableRow>
        <ValueColumn color={this.props.color}>
          <ValueContainer>
            <ValueText>{this.props.tierValue}</ValueText>
          </ValueContainer>
        </ValueColumn>
        <Droppable droppableId={this.props.id} direction="horizontal">
          {(provided, snapshot) => (
            <ItemsColumn
              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <ItemsContainer>
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
            </ItemsColumn>
          )}
        </Droppable>
      </StyledTableRow>
    );
  }
}

export default TableRow;
