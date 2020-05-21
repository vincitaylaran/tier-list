import React, { Component } from "react";
import styled, { css } from "styled-components";
import chroma from "chroma-js";

import { initialData } from "../initial-data";

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  ${({ color = chroma.random() }) => css`
    background-color: ${color};
  `};
`;

const TableCellValue = styled.td`
  display: flex;
  justify-content: center;
`;

const TableCellItems = styled.td`
  width: 90%;
  padding-left: 0.5rem;
`;

class TierList extends Component {
  state = {
    rows: initialData,
  };

  render() {
    return (
      <Table>
        <tbody>
          {this.state.rows.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCellValue>{row.tierValue}</TableCellValue>
                <TableCellItems>Tier Items</TableCellItems>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default TierList;
