class Snake {
    constructor(x, y) {
        this.snakeBody = [{x:x, y:y}];
        
    }
    move(direction,eat){
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
        if(!eat){
            this.snakeBody.pull();
        }
    }
    
      

}