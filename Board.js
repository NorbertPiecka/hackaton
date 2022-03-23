class Board {
    static board

    static initializeBoard() {
        board = [
            [Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
            [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, , , , , Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, , , , , , Element.Board, Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , Element.Board, Element.Board, Element.Board, Element.Board, , , Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, , , , , , Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, , , Element.Board, , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
            [Element.Board, , Element.Board, Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board, Element.Board, , Element.Board],
            [Element.Board, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , Element.Board],
            [Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board, Element.Board],
          ];
    }

    static draw() {
        return board
    }

    static addFood(numberOfFood) {
        let numberOfEmptyFields = 0;
        for (let y = 0; y < 28; y++) {
            for (let x = 0; x < 50; x++) {
                if (board[y][x]) {
                    numberOfEmptyFields++;
                }
            }
        }
        
        let numberOfFieldToAssFood = Math.random() * numberOfEmptyFields +1
        let yOfFoodField = 0
        let xOfFoodField = 0
        for (let y = 0; y < 28; y++) {
            for (let x = 0; x < 50; x++) {
                if (board[y][x] && numberOfFieldToAssFood > 0) {
                    yOfFoodField = y
                    xOfFoodField = x
                    numberOfFieldToAssFood--;
                }
            }
        }

        board[yOfFoodField][xOfFoodField] = Element.Food
    }
    
}