import React, { Component } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

// TODO: create a component/view for the item.

const StyledTableRow = styled.tr`
  background-color: ${(props) => props.backgroundColor};
`;

const RowValueContainer = styled.td`
  display: flex;
  justify-content: center;
  width: 90%;
`;

const RowItems = styled.td`
  width: 90%;
  padding-left: 0.5rem;
  background-color: ${(props) => (props.isDraggingOver ? "white" : "#1A1A1A")};
`;

const RowValueText = styled.h5`
  display: inline-block;
`;

class TableRow extends Component {
  render() {
    return (
      <StyledTableRow backgroundColor={this.props.color}>
        <RowValueContainer>
          <RowValueText>{this.props.tierValue}</RowValueText>
        </RowValueContainer>
        <Droppable droppableId={this.props.id} direction="horizontal">
          {(provided, snapshot) => (
            <RowItems
              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </RowItems>
          )}
        </Droppable>
      </StyledTableRow>
    );
  }
}

export default TableRow;
