const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

// 50 x 28
const board = [
    [Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
    [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, , , , , Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
    [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
    [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
    [Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board]
];

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