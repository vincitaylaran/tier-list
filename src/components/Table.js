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
          {this.props.data.map((item, index) => (
            <TableRow data={item.tierValue} key={index} />
          ))}
        </tbody>
      </StyledTable>
    );
  }
}

export default Table;
