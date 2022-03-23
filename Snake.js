class Snake {
    constructor(x, y,snakeType) {
        this.snakeBody = [{x:x, y:y}];
        this.snakeType = snakeType;
        this.dead = false
        
    }
    move(direction){
        if (this.dead) {
            return
        }

        let newHeadX;
        let newHeadY;
        if(direction=="up"){
            newHeadX = this.snakeBody[0].x;
            newHeadY = this.snakeBody[0].y-1;
        }
        if(direction=="down"){
            newHeadX = this.snakeBody[0].x;
            newHeadY = this.snakeBody[0].y+1;
        }
        if(direction=="left"){
            newHeadX = this.snakeBody[0].x-1;
            newHeadY = this.snakeBody[0].y;
        }
        if(direction=="right"){
            newHeadX = this.snakeBody[0].x+1;
            newHeadY = this.snakeBody[0].y;
        }
        this.snakeBody = [{x:newHeadX,y:newHeadY},...this.snakeBody];
        
    }
    size(){
        return this.snakeBody.length;
    }
    getBodyElementX(i){
        return this.snakeBody[i].x;
    }
    getBodyElementY(i){
        return this.snakeBody[i].y;
    }
    toBoard(){
        let boardSizeY = Board.board.length;
        let boardSizeX = Board.board[0].length;

        
        let headX = this.getBodyElementX(0);
        let headY = this.getBodyElementY(0);
        let collision = "clear";
        if(headX<0||headX>boardSizeX||headY<0||headY>boardSizeY){
            return false;
        }
        if(Board.board[headY][headX]===Element.Food) collision = "eat";
        if(Board.board[headY][headX]===Element.Poop) collision = "dead";
        if(Board.board[headY][headX]===Element.Wall) collision = "dead";
        if(Board.board[headY][headX]===Element.Snake1) collision = "dead";
        if(Board.board[headY][headX]===Element.Snake2) collision = "dead";
        if(Board.board[headY][headX]===Element.Snake3) collision = "dead";

        if (collision == "dead") {
            console.log("DEAD!")
            this.dead = true
        }

        if (collision == "eat") {

        } else {
            Board.board[this.snakeBody[this.snakeBody.length-1].y][this.snakeBody[this.snakeBody.length-1].x] = Element.Board
        }
        
        for(let i=0; i<this.size(); i++){

            let x = this.getBodyElementX(i);
            let y = this.getBodyElementY(i);
            board[y][x] = this.snakeType;

        }
        if(board[headY][headX]){
            return collision;
        }
    }
    
      

}