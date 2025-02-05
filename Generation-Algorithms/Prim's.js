class PrimsGenerator extends MazeGenerator{
    
    constructor(grid){
        super(grid);
        if (grid.length > 0) {
            this.frontier = [];
            this.current.visited = true;
             this.current.highlight();
            this.addfrontiers(this.current);
        }
    
    }

    step(){

        if(this.frontier.length > 0){
            let randomIndex = floor(random(this.frontier.length));
            let next = this.frontier.splice(randomIndex, 1)[0];
            next.visited = true;    
            next.highlight();
            this.connectToMaze(next);
            this.addfrontiers(next);
        } 
    }
    
    addfrontiers(cell){
        let neighbors = cell.getUnVisitedNeighbours();
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
        let visitedNeighbors = neighbors.filter(neighbor => neighbor.visited);

        if(visitedNeighbors.length > 0) {            
            let randomIndex = floor(random( visitedNeighbors.length));
            breakWalls (cell,visitedNeighbors[randomIndex]);
        }
    }

    
}