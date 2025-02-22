var COLS, ROWS;
var TILE = 30;
var Grid = [];
let mazeGenerator;
let canvas;
let fps = 30;



function setup() {
    canvas = createCanvas(901, 901);
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
     

        document.getElementById("gen-algorithm").addEventListener("change", function() { restartMaze();  });
    
        document.getElementById("reset").addEventListener("click", function() { restartMaze() });

        document.getElementById("generate").addEventListener("click", function() {
            let algoSelector = document.getElementById("gen-algorithm").value;
            
            selectAlgorithm(algoSelector); 
        });
        document.getElementById("speed-range").addEventListener("change", function() {
            fps = this.value;
            console.log("Selected fps: ", fps);
            frameRate(fps);
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


