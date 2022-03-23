const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const board = Board.board

Board.addFood(2)

for (let i=0; i < 28; i++) {
    for (let j=0; j < 50; j++) {
        try {
            if (board[i][j]== "board"){
                rec = new Rectangle(20*j,20*i,19,19, board[i][j])
                console.log(board[i][j] + " i: " + i + " j: " + j)
                console.log(board[i][j])
                rec.draw()
            }
        } catch (e) {
            // console.log("undefined")
        }
    }
}

const player = new Rectangle(20,20,20,20,Element.Snake1)
player.draw()

let elment = Element.Snake1
let elment = Element.Poop
const snake0 = new Snake(1,1);
console.log(snake0)
console.log(elment)
console.log(player)