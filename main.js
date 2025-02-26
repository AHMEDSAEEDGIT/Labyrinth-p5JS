var COLS, ROWS;
var TILE = 50;
var Grid = [];
let mazeGenerator;
let canvas;
let fps =30;
// let isPaused = false;  // Controls pause/resume
// let isInstantSolve = false; // For solving instantly



function setup() {
    canvas = createCanvas(1202, 902);
    canvas.parent('maze-container');
    COLS = floor(width / TILE);
    ROWS = floor(height / TILE);
     frameRate(fps);

    // Create the grid
    initializeGrid();

    // Initialize DFS maze generation
    //  selectAlgorithm("DFS");
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
     

        document.getElementById("gen-algorithm").addEventListener("change", function() { 
            let generateButton = document.getElementById("generate");
            generateButton.disabled = false;
            generateButton.innerHTML = "Generate";
            restartMaze();  
        });
    
        document.getElementById("reset").addEventListener("click", function() { 
            let generateButton = document.getElementById("generate");
            generateButton.disabled = false;
            generateButton.innerHTML = "Generate";
            restartMaze() 
        });

        document.getElementById("generate").addEventListener("click", function() {
            let algoSelector = document.getElementById("gen-algorithm").value;
            let generateButton = document.getElementById("generate");

            generateButton.disabled = true;
            generateButton.innerHTML = "Generating...";

            selectAlgorithm(algoSelector); 
        });
        document.getElementById("speed-range").addEventListener("input", function() {
            console.log("Selected fps: ", fps);
            fps = parseInt(this.value);  // Convert to integer
            frameRate(fps);  // Apply new frame rate
            document.getElementById("speed-display").innerHTML = fps + " FPS";
        });

    });



function selectAlgorithm(algorithm) {
    // initializeGrid();
    
     if (algorithm === "DFS") {
         mazeGenerator = new DFSGenerator(Grid);
     } else if (algorithm === "Prims") {
        // mazeGenerator = new PrimsGenerator(Grid);
        mazeGenerator = new PrimsGenerator(Grid);
     }else if (algorithm === "HUK"){
        mazeGenerator = new HUKGenerator(Grid);
     }else if (algorithm === "Kruskal") {
        mazeGenerator = new KruskalGenerator(Grid);
     }
 }
 
 function initializeGrid() {
    Grid = [];
    for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS; i++) {
            Grid.push(new Cell(i, j));
        }
    }
}

function restartMaze() {
    initializeGrid();
    mazeGenerator = null;
}


