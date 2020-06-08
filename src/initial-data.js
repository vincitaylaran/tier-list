export const initialData = {
  rows: [
    {
      rowId: "row-1",
      tierValue: "S",
      items: [
        { itemId: "16", name: "Test" },
        { itemId: "17", name: "Test" },
      ],
      color: "rgb(255, 127, 127)",
    },
    { rowId: "row-2", tierValue: "A", items: [], color: "rgb(255, 191, 127)" },
    { rowId: "row-3", tierValue: "B", items: [], color: "rgb(255, 223, 127)" },
    { rowId: "row-4", tierValue: "C", items: [], color: "rgb(255, 255, 127)" },
    { rowId: "row-5", tierValue: "D", items: [], color: "rgb(191, 255, 127)" },
    { rowId: "row-6", tierValue: "E", items: [], color: "rgb(127, 255, 127)" },
    {
      rowId: "row-7",
      tierValue: "F",
      items: [
        { itemId: "18", name: "Test" },
        { itemId: "19", name: "Test" },
      ],
      color: "rgb(127, 255, 255)",
    },
  ],
  items: {
    gridMain: {
      gridId: "items-grid",
      gridItems: [
        { itemId: "1", name: "Lucio" },
        { itemId: "2", name: "Ana" },
        { itemId: "3", name: "Sombra" },
        { itemId: "4", name: "Hanzo" },
        { itemId: "5", name: "Genji" },
        { itemId: "6", name: "Pharah" },
        { itemId: "7", name: "Mei" },
        { itemId: "8", name: "Torbjorn" },
        { itemId: "9", name: "Widowmaker" },
        { itemId: "10", name: "Winston" },
        { itemId: "11", name: "Roadhog" },
        { itemId: "12", name: "Soldier 76" },
        { itemId: "13", name: "Doomfist" },
        { itemId: "14", name: "Echo" },
        { itemId: "15", name: "Symmetra" },
      ],
    },
  },
  rowsOrder: ["row-1", "row-2", "row-3", "row-4", "row-5", "row-6", "row-7"],
};
