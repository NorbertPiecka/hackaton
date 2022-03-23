class Rectangle {

    constructor(positionX, positionY, width, height, type) {
        this.positionX = positionX
        this.positionY = positionY
        this.width = width
        this.height = height
        this.type = type
        this.chooseColor()
    }

    chooseColor() {
        console.log("Color set: " + this.type)
        switch(this.type) {
            case Element.Wall:
                this.color = "black"
                break
            case Element.Board:
                this.color = "gray"
                break
            case Element.Sanke1:
                this.color = "red"
                break
            case Element.Snake2:
                this.color = "purple"
                break
            case Element.Sanke3:
                this.color = "pink"
                break
            case Element.Food:
                this.color = "green"
                break
            case Element.Poop:
                this.color = "brown"
                break
        }
    }

    draw() {
        ctx.beginPath()
        ctx.rect(this.positionX, this.positionY, this.width, this.height)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}