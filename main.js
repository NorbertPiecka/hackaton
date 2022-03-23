const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const board = Board.board

 
Board.addFood(2)
const snake1 = new Snake(5,5,Element.Snake1);


snake1.toBoard(board);
console.log(board);

function drawBoard(){
    for (let i=0; i < 28; i++) {
        for (let j=0; j < 50; j++) {
            rec = new Rectangle(20*j,20*i,19,19, board[i][j])
            rec.draw()
        }
    }
}

drawBoard();


<<<<<<< HEAD


=======
>>>>>>> d066caf5a8b8a4728e120eb92d1c9a32d6c9d4be
document.addEventListener('keypress', chgDirection);

let gameLoop = setInterval(gameStep,300);
let step = 0;
function gameStep(){
     
       snake1.move(p1Direction,true);
       snake1.toBoard();
       drawBoard();

    
   
<<<<<<< HEAD
     
=======
    for(let i=0; i<snake0.size(); i++){
        const aa = new Rectangle(snake0.getBodyElementX(i)*20,snake0.getBodyElementY(i)*20,20,20,Element.Snake1)
       aa.draw();
    }
    if(step>40) clearInterval(gameLoop);
>>>>>>> d066caf5a8b8a4728e120eb92d1c9a32d6c9d4be
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

