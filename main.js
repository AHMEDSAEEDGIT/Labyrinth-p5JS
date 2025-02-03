var COLS, ROWS;
var TILE = 40;
var Grid = [];
let mazeGenerator;

function setup() {
    createCanvas(401, 401);
    COLS = floor(width / TILE);
    ROWS = floor(height / TILE);
    frameRate(10);

    // Create the grid
    for (var row = 0; row < ROWS; row++) {
        for (var col = 0; col < COLS; col++) {
            var cell = new Cell(row, col);
            Grid.push(cell);
        }
    }

    // Initialize DFS maze generation
     selectAlgorithm("Prims");
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

// document.getElementById("algorithm").addEventListener("change", function () {  selectAlgorithm(this.value);}  );

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("algorithm").addEventListener("change", function() {
        selectAlgorithm(this.value);
    });
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
 