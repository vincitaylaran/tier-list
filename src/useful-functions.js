export const deepCopy = (input) => JSON.parse(JSON.stringify(input));

//
// If you're passing the rows and the items as arguments at the same time,
// make sure the you pass rows to the 'list' argument and items to 'otherList'.
export const reorder = (
  list,
  source,
  destination,
  draggableId,
  draggedBetweenRows = false,
  draggedFromRowToList = false,
  otherList = false
) => {
  let rows, items, rowItem;

  if (list.containerId === "items-main") {
    // create a deep copy of the list.
    let itemsCopy = JSON.parse(JSON.stringify(list));
    let item = itemsCopy.list.splice(source.index, 1)[0];
    itemsCopy.list.splice(destination.index, 0, item);
    return itemsCopy;
  }

  if (draggedBetweenRows) {
    rows = JSON.parse(JSON.stringify(list));

    rows.forEach((row) => {
      if (`row-${row.id}${row.tier}` === source.droppableId) {
        row.items.forEach((item, index) => {
          if (item.id === draggableId) {
            rowItem = row.items.splice(index, 1)[0];
          }
        });
      }
    });

    rows.forEach((row) => {
      if (`row-${row.id}${row.tier}` === destination.droppableId) {
        row.items.splice(destination.index, 0, rowItem);
      }
    });
    return rows;
  }

  if (draggedFromRowToList && otherList) {
    rows = JSON.parse(JSON.stringify(list));
    items = JSON.parse(JSON.stringify(otherList));

    rows.forEach((row) => {
      if (`row-${row.id}${row.tier}` === source.droppableId) {
        row.items.forEach((item, index) => {
          if (item.id === draggableId) {
            rowItem = row.items.splice(index, 1)[0];
          }
        });
      }
    });

    items.list.splice(destination.index, 0, rowItem);
    return { rows, items };
  }

  rows = JSON.parse(JSON.stringify(list));
  items = JSON.parse(JSON.stringify(otherList));
  let item = items.list.splice(source.index, 1)[0];

  rows.forEach((row) => {
    if (`row-${row.id}${row.tier}` === destination.droppableId) {
      row.items.splice(destination.index, 0, item);
    }
  });
  return { rows, items };
};
