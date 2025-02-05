var COLS, ROWS;
var TILE = 40;
var Grid = [];
let mazeGenerator;

function setup() {
    createCanvas(801, 801);
    COLS = floor(width / TILE);
    ROWS = floor(height / TILE);
    frameRate(10);

    // Create the grid
    initializeGrid();

    // Initialize DFS maze generation
     selectAlgorithm("DFS");
}

function draw() {
    background(51);
    for (let cell of Grid) {
        cell.show();
    }

    // Run one step of DFS per frame
    if (mazeGenerator)
        mazeGenerator.step();
    else
        console.log("No maze generator selected");
} 


document.addEventListener("DOMContentLoaded", function () {
    let algoSelector = document.getElementById("algorithm");
    if (algoSelector) {
        algoSelector.addEventListener("change", function() {
            restartMaze();
        });
    } else {
        console.error("Algorithm selection dropdown not found!");
    }
});



function selectAlgorithm(algorithm) {
    // initializeGrid();
 
     if (algorithm === "DFS") {
         mazeGenerator = new DFSGenerator(Grid);
     } else if (algorithm === "Prims") {
        // mazeGenerator = new PrimsGenerator(Grid);
        mazeGenerator = new PrimsGenerator(Grid);
     }
 }
 
 function initializeGrid() {
    Grid = [];
    for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
            Grid.push(new Cell(i, j));
        }
    }
}

function restartMaze() {
    initializeGrid();
    let algo = document.getElementById("algorithm").value;
    console.log("Selected algorithm: ", algo);
    selectAlgorithm(algo);
}
