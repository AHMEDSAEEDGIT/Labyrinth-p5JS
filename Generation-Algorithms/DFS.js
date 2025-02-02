class DFSGenerator extends MazeGenerator {
    constructor(grid) {
        super(grid);
        this.stack = [];
    }

    step() {
        console.log("Hiii");
        this.current.visited = true;
        this.current.highlight();

        let next = this.current.checkNeighbors();
        if (next) {
            this.stack.push(this.current);
            breakWalls(this.current, next);
            this.current = next;
        } else if (this.stack.length > 0) {
            this.current = this.stack.pop();
        }
    }
}
