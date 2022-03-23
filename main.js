const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const board = Board.board

Board.addFood(2)

for (let i=0; i < 28; i++) {
    for (let j=0; j < 50; j++) {
        rec = new Rectangle(20*j,20*i,19,19, board[i][j])
        rec.draw()
    }
}

let elment = Element.Poop
const snake0 = new Snake(1,1,Element.Snake1);

const food = {x:5,y:5}

const f1 = new Rectangle(food.x*20,food.y*20,20,20,Element.Food)
f1.draw()

document.addEventListener('keypress', chgDirection);

let gameLoop = setInterval(gameStep,300);
let step = 0;
function gameStep(){
   // ctx.clearRect(0,0,innerWidth,innerHeight);
    
    step = step+1;
    snake0.move(p1Direction,true);
    console.log(snake0);
   
    for(let i=0; i<snake0.size(); i++){
        const aa = new Rectangle(snake0.getBodyElementX(i)*20,snake0.getBodyElementY(i)*20,20,20,Element.Poop)
       aa.draw();
    }
    if(step>40) clearInterval(gameLoop);
}

let p1Direction = "right";


function chgDirection(e){
	var key = String.fromCharCode(e.which);
	if(key==='w') {
		p1Direction = "up";
        console.log("player 1 up");
	}
	if(key==='s') {
        p1Direction = "down";
		console.log("player 1 down");
	}
	if(key==='a') {
        p1Direction = "left";
		console.log("player 1 left");
	}
	if(key==='d') {
		p1Direction = "right";
		console.log("player 1 right");
	}


	
}

