import React, { Component } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

const StyledTableRow = styled.tr`
  ${({ color = chroma.random() }) => css`
    background-color: ${color};
  `};
`;

const RowValueContainer = styled.td`
  display: flex;
  justify-content: center;
`;

const RowItems = styled.td`
  width: 90%;
  padding-left: 0.5rem;
`;

const RowValueText = styled.h5`
  display: inline-block;
`;

class TableRow extends Component {
  render() {
    return (
      <StyledTableRow>
        <RowValueContainer>
          <RowValueText>{this.props.data}</RowValueText>
        </RowValueContainer>
        <RowItems />
      </StyledTableRow>
    );
  }
}

export default TableRow;
