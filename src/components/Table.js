import React, { Component } from "react";
import styled from "styled-components";

import TableRow from "./TableRow";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 75%;
`;

class Table extends Component {
  render() {
    return (
      <Container>
        <StyledTable>
          <tbody>
            {this.props.data.map((item) => (
              <TableRow data={item.tierValue} key={item.rowId} />
            ))}
          </tbody>
        </StyledTable>
      </Container>
    );
  }
}

export default Table;
