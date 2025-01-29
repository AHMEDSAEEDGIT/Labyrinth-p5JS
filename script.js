console.log("Live Server is running");
var COLS ,ROWS;
var TILE =40;
var Grid = [];
var stack = [];
var Current ;

function setup() {
    createCanvas(401, 401);
    
    COLS = floor(width/TILE);
    ROWS = floor(height/TILE);
    frameRate (10);
    for(var row  = 0 ; row < ROWS ; row ++){
        for(var col = 0 ; col <COLS ; col ++ ){
            var cell = new Cell(row , col);
            //console.log(cell);
            Grid.push(cell);
        }
    }
    
    Current = Grid[0];
}


function draw() {
    background(51);
    for(var cell = 0 ; cell < Grid.length ; cell++)
    {
        Grid[cell].show();
    }

    Current.visited = true;
    Current.higlight();
    var next = Current.checkNeighbors();
    if(next){
        
         //next.visited= true;
         stack.push(Current);
         breakWalls(Current,next);
        Current = next;
    }else if (stack.length>0){
        Current = stack.pop();
    }
}

