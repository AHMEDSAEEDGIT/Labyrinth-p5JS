class PrimsGenerator extends MazeGenerator{
    
    constructor(grid){
        super(grid);
        this.frontier = [];
        this.current.visited = true;
        console.log("Initialized Prim's Generator");
    }

    step(){
        console.log("Step called");
        this.current.visited = true;
        // this.current.highlight();
        this.addfrontiers(this.current);
        if(this.frontier.length > 0){
            let randomIndex = floor(random(0, this.frontier.length));
            let next = this.frontier[randomIndex];
            this.frontier.splice(randomIndex, 1);
            next.visited = true;    
            this.connectToMaze(next);
            this.addfrontiers(next);
            console.log("Frontier length: ", this.frontier.length);
        } else {
            console.log("No more frontiers");
        }

    }
    
    addfrontiers(cell){
        let neighbors = cell.getNeighbors();
        if(!neighbors) return;
        for(let neighbor of neighbors){
            if(!this.frontier.includes(neighbor)){
                this.frontier.push(neighbor);
                console.log("Added to frontier: ", neighbor);
            }
        }
    }

    connectToMaze(cell){
        let neighbors = cell.getNeighbors();
        // let visitedNeighbors = neighbors.filter(neighbor => neighbor.visited);
        if(neighbors){
            let randomIndex = floor(random(0, neighbors.length));
            breakWalls(cell, neighbors[randomIndex]);
            
        }
    }
}