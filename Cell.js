
function Cell (i , j){
    this.i = i ;
    this.j = j;
    this.visited = false;
     // Define walls dictionary
     this.walls = {
        top: true,
        right: true,
        bottom: true,
        left: true,
    };

    this.checkNeighbors = function (){
        var neighbors  = [];
        var top    = Grid[Index (i   ,j-1)];
        var right  = Grid[Index (i+1 ,j)];
        var bottom = Grid[Index (i   ,j+1)];
        var left   = Grid[Index (i-1 , j)];

        if(top && !top.visited){
            neighbors.push(top);
        }
        if(right && !right.visited){
            neighbors.push(right);
        }
        if(bottom && !bottom.visited){
            neighbors.push(bottom);
        }
        if(left && !left.visited){
            neighbors.push(left);
        }

        if(neighbors.length > 0){
            var neighborIndex = floor(random( 0, neighbors.length));
            return neighbors[neighborIndex];
        }else{
            return undefined;
        }

    }

    this.higlight= function() {
        var x = this.i * TILE;
        var y = this.j * TILE;
        // disable border colors
        noStroke();
        // colorize current cell
        fill(0,0,255,100);
        rect(x,y,TILE,TILE);
    }

    this.show = function () {
        var x = this.i * TILE;
        var y = this.j * TILE;

        //set outline color with white 
        stroke(255);
        //draw line for walls
        if(this.walls.top){
            line(x,y,x+TILE,y);
        }
        if(this.walls.right){
            line(x+TILE,y,x+TILE,y+TILE);
        }
        if(this.walls.bottom){
            line(x+TILE,y+TILE,x,y+TILE);
        }
        if(this.walls.left){
            line(x,y+TILE,x,y);
        }

        if(this.visited){
            // clear border color if visited
            // if you remove this line it will draw the borders over the broken walls
            noStroke();
            fill(255,0,255,100);
            rect(x,y,TILE,TILE);
        }
    }
}

//helper function that retrives index of 1D array that correspons to 2D Grid
function Index (i , j){

    if(i < 0 || j < 0 ||i > COLS-1 || j > ROWS-1){
        return -1;
    }

    return j + i * COLS;
}

// remove the walls between the current cell and neighbor which will be visited
function breakWalls(current , neighbor){
    dx = current.i - neighbor.i;
    if(dx == 1){
        current.walls.left = false;
        neighbor.walls.right = false;
    }
    if(dx == -1 ){
        current.walls.right = false;
        neighbor.walls.left = false;
    }

    dy = current.j - neighbor.j;
    if(dy == 1){
        current.walls.top = false;
        neighbor.walls.bottom = false;
    }
    if(dy == -1 ){
        current.walls.bottom = false;
        neighbor.walls.top = false;
    }

}

