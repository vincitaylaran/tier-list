import React, { Component } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

const StyledTableRow = styled.tr`
  ${({ color = chroma.random() }) => css`
    background-color: ${color};
  `};
`;

const StyledTableCellValue = styled.td`
  display: flex;
  justify-content: center;
`;

const StyledTableCellItems = styled.td`
  width: 90%;
  padding-left: 0.5rem;
`;

class TableRow extends Component {
  render() {
    return (
      <StyledTableRow>
        <StyledTableCellValue>{this.props.data}</StyledTableCellValue>
        <StyledTableCellItems />
      </StyledTableRow>
    );
  }
}

export default TableRow;
