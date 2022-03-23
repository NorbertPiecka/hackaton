const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Rectangle(20,20,20,20,Element.Poop)
player.draw()

let elment = Element.Poop
const snake0 = new Snake(1,1);
console.log(snake0)
console.log(elment)
console.log(player)
