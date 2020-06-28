import React, { Component } from "react";
import styled from "styled-components";

import Item from "./Item";

import { Droppable } from "react-beautiful-dnd";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// used to override CSS on Material components.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
  },
});

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
  width: 92%;
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: black;
  border-width: 1px;
  border-style: solid;
  width: 8%;
`;

const Arrow = styled(IconButton)``;

class TierList extends Component {
  onArrowUpClick = (event) => {
    if (this.props.onArrowUpClick) {
      this.props.onArrowUpClick(event.currentTarget.value);
    }
  };

  onArrowDownClick = (event) => {
    if (this.props.onArrowDownClick) {
      this.props.onArrowDownClick(event.currentTarget.value);
    }
  };

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
              <Arrows>
                <MuiThemeProvider theme={theme}>
                  <Arrow
                    value={index}
                    onClick={this.onArrowUpClick}
                    children={<ExpandLessIcon color="primary" />}
                  />
                  <Arrow
                    value={index}
                    onClick={this.onArrowDownClick}
                    children={<ExpandMoreIcon color="primary" />}
                  />
                </MuiThemeProvider>
              </Arrows>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default TierList;
