import React, { Component } from "react";
import styled from "styled-components";

import TableRow from "./TableRow";

const StyledTable = styled.table`
  width: 100%;
`;

class Table extends Component {
  render() {
    return (
      <StyledTable>
        <tbody>
          {this.props.data.map((row, index) => (
            <TableRow
              tierValue={row.tierValue}
              color={row.color}
              key={index}
              id={row.rowId}
            />
          ))}
        </tbody>
      </StyledTable>
    );
  }
}

export default Table;
