const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Rectangle(20,20,20,20,Element.Snake1)
player.draw()

let elment = Element.Snake1

console.log(elment)
console.log(player)
