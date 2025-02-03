class DFSGenerator extends MazeGenerator {
    constructor(grid) {
        super(grid);
        this.stack = [];
    }

    step() {
        console.log("Hiii");
        this.current.visited = true;
        this.current.highlight();

        let neighbors = this.current.getNeighbors();

        if (neighbors) {
            let next = neighbors[floor(random(0, neighbors.length))];
            this.stack.push(this.current);
            breakWalls(this.current, next);
            this.current = next;
        } else if (this.stack.length > 0) {
            this.current = this.stack.pop();
        }
    }
}
