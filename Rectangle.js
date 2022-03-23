class Rectangle {

    constructor(positionX, positionY, width, height, type) {
        console.log(positionX);
        this.positionX = positionX
        this.positionY = positionY
        this.width = width
        this.height = height
        this.type = type
        this.chooseColor()
    }

    chooseColor() {
        switch(this.type) {
            case Element.Wall:
                this.color = "black"
            case Element.Board:
                this.color = "gray"
            case Element.Snake1:
                this.color = "red"
            case Element.Snake2:
                this.color = "purple"
            case Element.Sanke3:
                this.color = "pink"
            case Element.Food:
                this.color = "green"
            case Element.Poop:
                this.color = "brown"
        }
    }

    draw() {
        ctx.beginPath()
        ctx.rect(this.positionX, this.positionY, this.width, this.height)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}