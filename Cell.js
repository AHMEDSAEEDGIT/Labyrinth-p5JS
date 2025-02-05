class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.visited = false;

        this.walls = {  top: true, right: true, bottom: true, left: true };
        
    }

    getNeighbors() {
        let neighbors = [];
        let top = Grid[Index(this.i, this.j - 1)];
        let right = Grid[Index(this.i + 1, this.j)];
        let bottom = Grid[Index(this.i, this.j + 1)];
        let left = Grid[Index(this.i - 1, this.j)];

        if (top) neighbors.push(top);
        if (right) neighbors.push(right);
        if (bottom) neighbors.push(bottom);
        if (left) neighbors.push(left);

        return  neighbors;
    }

    getUnVisitedNeighbours(){
        let neighbors = [];
        let top = Grid[Index(this.i, this.j - 1)];
        let right = Grid[Index(this.i + 1, this.j)];
        let bottom = Grid[Index(this.i, this.j + 1)];
        let left = Grid[Index(this.i - 1, this.j)];

        if (top && !top.visited) neighbors.push(top);
        if (right && !right.visited) neighbors.push(right);
        if (bottom && !bottom.visited) neighbors.push(bottom);
        if (left && !left.visited) neighbors.push(left);

        // if (neighbors.length > 0) {
        //     let neighborIndex = floor(random(0, neighbors.length));
        //     return neighbors[neighborIndex];
        // } else {
        //     return undefined;
        // }

        return neighbors.length > 0 ? neighbors : undefined;
    }

    highlight() {
        let x = this.i * TILE;
        let y = this.j * TILE;
        noStroke();
        fill(0, 0, 255, 100);
        rect(x, y, TILE, TILE);
    }

    show() {
        let x = this.i * TILE;
        let y = this.j * TILE;
        stroke(255);

        if (this.walls.top) line(x, y, x + TILE, y);
        if (this.walls.right) line(x + TILE, y, x + TILE, y + TILE);
        if (this.walls.bottom) line(x + TILE, y + TILE, x, y + TILE);
        if (this.walls.left) line(x, y + TILE, x, y);

        if (this.visited) {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, TILE, TILE);
        }

    }


    
}
