/* Global variables */
const palettes = [
  {
    name: "endesga",
    colors: [
      "#be4a2f",
      "#d77643",
      "#ead4aa",
      "#e4a672",
      "#b86f50",
      "#733e39",
      "#3e2731",
      "#a22633",
      "#e43b44",
      "#f77622",
      "#feae34",
      "#fee761",
      "#63c74d",
      "#3e8948",
      "#265c42",
      "#193c3e",
      "#124e89",
      "#0099db",
      "#2ce8f5",
      "#ffffff",
      "#c0cbdc",
      "#8b9bb4",
      "#5a6988",
      "#3a4466",
      "#262b44",
      "#181425",
      "#ff0044",
      "#68386c",
      "#b55088",
      "#f6757a",
      "#e8b796",
      "#c28569",
    ],
  },
  {
    name: "resurrect",
    colors: [
      "#2e222f",
      "#3e3546",
      "#625565",
      "#966c6c",
      "#ab947a",
      "#694f62",
      "#7f708a",
      "#9babb2",
      "#c7dcd0",
      "#ffffff",
      "#6e2727",
      "#b33831",
      "#ea4f36",
      "#f57d4a",
      "#ae2334",
      "#e83b3b",
      "#fb6b1d",
      "#f79617",
      "#f9c22b",
      "#7a3045",
      "#9e4539",
      "#cd683d",
      "#e6904e",
      "#fbb954",
      "#4c3e24",
      "#676633",
      "#a2a947",
      "#d5e04b",
      "#fbff86",
      "#165a4c",
      "#239063",
      "#1ebc73",
      "#91db69",
      "#cddf6c",
      "#313638",
      "#374e4a",
      "#547e64",
      "#92a984",
      "#b2ba90",
      "#0b5e65",
      "#0b8a8f",
      "#0eaf9b",
      "#30e1b9",
      "#8ff8e2",
      "#323353",
      "#484a77",
      "#4d65b4",
      "#4d9be6",
      "#8fd3ff",
      "#45293f",
      "#6b3e75",
      "#905ea9",
      "#a884f3",
      "#eaaded",
      "#753c54",
      "#a24b6f",
      "#cf657f",
      "#ed8099",
      "#831c5d",
      "#c32454",
      "#f04f78",
      "#f68181",
      "#fca790",
      "#fdcbb0",
    ],
  },
  {
    name: "aap",
    colors: [
      "#060608",
      "#141013",
      "#3b1725",
      "#73172d",
      "#b4202a",
      "#df3e23",
      "#fa6a0a",
      "#f9a31b",
      "#ffd541",
      "#fffc40",
      "#d6f264",
      "#9cdb43",
      "#59c135",
      "#14a02e",
      "#1a7a3e",
      "#24523b",
      "#122020",
      "#143464",
      "#285cc4",
      "#249fde",
      "#20d6c7",
      "#a6fcdb",
      "#ffffff",
      "#fef3c0",
      "#fad6b8",
      "#f5a097",
      "#e86a73",
      "#bc4a9b",
      "#793a80",
      "#403353",
      "#242234",
      "#221c1a",
      "#322b28",
      "#71413b",
      "#bb7547",
      "#dba463",
      "#f4d29c",
      "#dae0ea",
      "#b3b9d1",
      "#8b93af",
      "#6d758d",
      "#4a5462",
      "#333941",
      "#422433",
      "#5b3138",
      "#8e5252",
      "#ba756a",
      "#e9b5a3",
      "#e3e6ff",
      "#b9bffb",
      "#849be4",
      "#588dbe",
      "#477d85",
      "#23674e",
      "#328464",
      "#5daf8d",
      "#92dcba",
      "#cdf7e2",
      "#e4d2aa",
      "#c7b08b",
      "#a08662",
      "#796755",
      "#5a4e44",
      "#423934",
    ],
  },
  {
    name: "pear",
    colors: [
      "#5e315b",
      "#8c3f5d",
      "#ba6156",
      "#f2a65e",
      "#ffe478",
      "#cfff70",
      "#8fde5d",
      "#3ca370",
      "#3d6e70",
      "#323e4f",
      "#322947",
      "#473b78",
      "#4b5bab",
      "#4da6ff",
      "#66ffe3",
      "#ffffeb",
      "#c2c2d1",
      "#7e7e8f",
      "#606070",
      "#43434f",
      "#272736",
      "#3e2347",
      "#57294b",
      "#964253",
      "#e36956",
      "#ffb570",
      "#ff9166",
      "#eb564b",
      "#b0305c",
      "#73275c",
      "#422445",
      "#5a265e",
      "#80366b",
      "#bd4882",
      "#ff6b97",
      "#ffb5b5",
    ],
  },
  {
    name: "zughy",
    colors: [
      "#472d3c",
      "#5e3643",
      "#7a444a",
      "#a05b53",
      "#bf7958",
      "#eea160",
      "#f4cca1",
      "#b6d53c",
      "#71aa34",
      "#397b44",
      "#3c5956",
      "#302c2e",
      "#5a5353",
      "#7d7071",
      "#a0938e",
      "#cfc6b8",
      "#dff6f5",
      "#8aebf1",
      "#28ccdf",
      "#3978a8",
      "#394778",
      "#39314b",
      "#564064",
      "#8e478c",
      "#cd6093",
      "#ffaeb6",
      "#f4b41b",
      "#f47e1b",
      "#e6482e",
      "#a93b3b",
      "#827094",
      "#4f546b",
    ],
  },
  {
    name: "sweetie",
    colors: [
      "#1a1c2c",
      "#5d275d",
      "#b13e53",
      "#ef7d57",
      "#ffcd75",
      "#a7f070",
      "#38b764",
      "#257179",
      "#29366f",
      "#3b5dc9",
      "#41a6f6",
      "#73eff7",
      "#f4f4f4",
      "#94b0c2",
      "#566c86",
      "#333c57",
    ],
  },
];
/**/

function createGridRow() {
  const gridRow = document.createElement("div");
  gridRow.className = "grid-row";

  return gridRow;
}

function createGridCell() {
  const gridCell = document.createElement("div");
  gridCell.className = "grid-cell";
  gridCell.setAttribute("draggable", "false");

  return gridCell;
}

function buildPalette(palette) {
  const paletteGrid = document.querySelector(".palette .grid");
  paletteGrid.innerHTML = "";
  const maxGridRowCells = 16;

  let gridRows = [];
  for (let i = 0; i < palette.colors.length; i += 1) {
    if (i === 0 || (i + 0) % maxGridRowCells === 0) {
      gridRows.push(createGridRow());
    }

    const gridCell = createGridCell();
    gridCell.style.backgroundColor = palette.colors[i];
    gridCell.className += " palette-color";
    gridRows[gridRows.length - 1].appendChild(gridCell);
  }

  for (const gridRow of gridRows) {
    paletteGrid.appendChild(gridRow);
  }
}

/**
 *
 * @param {Array} size
 */
function buildCanvas(size) {
  const canvasGrid = document.querySelector(".canvas .grid");
  canvasGrid.innerHTML = "";
  const rows = size[0];
  const cols = size[1];

  for (let i = 0; i < rows; i += 1) {
    const gridRow = createGridRow();

    for (let j = 0; j < cols; j += 1) {
      const gridCell = createGridCell();
      gridCell.className += " canvas-cell";

      gridRow.appendChild(gridCell);
    }

    canvasGrid.appendChild(gridRow);
  }
}

function addEventListeners() {
  const body = document.querySelector("body");

  body.addEventListener("click", (event) => {
    if (event.target.classList.contains("palette-color")) {
      sessionStorage.setItem(
        "selected-color",
        event.target.style.backgroundColor
      );
    }
  });

  body.addEventListener("click", (event) => {
    if (event.target.classList.contains("canvas-cell")) {
      event.target.style.backgroundColor =
        sessionStorage.getItem("selected-color");
    }
  });
}

/**
 *
 * @param {Event} event
 */
function choosePalette(event) {
  const paletteName = event.target.value;

  for (const palette of palettes) {
    if (palette.name === paletteName) {
      buildPalette(palette);
      localStorage.setItem("selected-palette", JSON.stringify(palette));
      break;
    }
  }
}

function chooseCanvasGridSize(event) {
  const gridSize = [parseInt(event.target.value), parseInt(event.target.value)];
  buildCanvas(gridSize);
  localStorage.setItem("selected-canvas-grid-size", JSON.stringify(gridSize));
}

window.onload = function () {
  buildPalette(palettes[2]);
  buildCanvas([16, 16]);
  addEventListeners();
};

document.querySelector("#palettes").addEventListener("input", choosePalette);
document
  .querySelector("#canvas-grid-size")
  .addEventListener("input", chooseCanvasGridSize);
