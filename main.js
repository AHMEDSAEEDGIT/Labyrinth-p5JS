// console.log("Live Server is running");
// var COLS ,ROWS;
// var TILE =40;
// var Grid = [];
// var stack = [];
// var Current ;

// function setup() {
//     createCanvas(401, 401);
    
//     COLS = floor(width/TILE);
//     ROWS = floor(height/TILE);
//     frameRate (10);
//     for(var row  = 0 ; row < ROWS ; row ++){
//         for(var col = 0 ; col <COLS ; col ++ ){
//             var cell = new Cell(row , col);
//             //console.log(cell);
//             Grid.push(cell);
//         }
//     }
    
//     Current = Grid[0];
// }


// function draw() {
//     background(51);
//     for(var cell = 0 ; cell < Grid.length ; cell++)
//     {
//         Grid[cell].show();
//     }

//     Current.visited = true;
//     Current.higlight();
//     var next = Current.checkNeighbors();
//     if(next){
        
//          //next.visited= true;
//          stack.push(Current);
//          breakWalls(Current,next);
//         Current = next;
//     }else if (stack.length>0){
//         Current = stack.pop();
//     }
// }


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
   selectAlgorithm("DFS");
}

function draw() {
    background(51);
    for (let cell of Grid) {
        cell.show();
    }

    // Run one step of DFS per frame
    mazeGenerator.step();
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
        console.log("HIIIIIIIIIIIIII");
     }
 }
 