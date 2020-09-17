'use strict' 

var x = 0
var y = 0
var apple_x
var apple_y
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var snake_size = 50
var apples_eaten = 1

// Draw the canvas 
ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height)

drawSnake()

randomApple()

function drawSnake(){
	ctx.fillStyle = "green"
	ctx.fillRect(x, y, snake_size, snake_size)



}

function randomApple() {
	apple_x = Math.floor(Math.random() * 451)
	apple_y = Math.floor(Math.random() * 451)

	var mod_x = apple_x % 100
	var mod_y = apple_y % 100
	if (mod_x < 25) mod_x = 0
	else if (mod_x >= 75) mod_x = 100
	else mod_x = 50 

	if (mod_y < 25) mod_y = 0
	else if (mod_y >= 75) mod_y = 100
	else mod_y = 50 

	apple_x = (apple_x - (apple_x % 100)) + mod_x
	apple_y = (apple_y - (apple_y % 100)) + mod_y
	
	if(apple_x != x || apple_y != y)
	{
		ctx.fillStyle = "red"
		ctx.fillRect(apple_x, apple_y, snake_size, snake_size)
	}
}

function moveRight() {
	if( x + snake_size < canvas.width)
	{
		ctx.fillStyle = "black"
		ctx.fillRect(x, y, snake_size, snake_size)

		x = x + snake_size

		ctx.fillStyle = "green"
		ctx.fillRect(x, y, snake_size, snake_size)
	}
	else alert("Can't move right, you are dead!")
}


function moveLeft() {
	
	if( x - snake_size >= 0)
	{
		ctx.fillStyle = "black"
		ctx.fillRect(x, y, snake_size, snake_size)

		x = x - snake_size

		ctx.fillStyle = "green"
		ctx.fillRect(x, y, snake_size, snake_size)
	}
	else alert("Can't move left, you are dead!") // falta hacer un reset del juego
}

function moveUp() {
	
	if( y - snake_size >= 0)
	{
		ctx.fillStyle = "black"
		ctx.fillRect(x, y, snake_size, snake_size)

		y = y - 50

		ctx.fillStyle = "green"
		ctx.fillRect(x, y, snake_size, snake_size)
	}
	else alert("Can't move up, you are dead!")
}

function moveDown() {
	
	if( y + snake_size < canvas.height)
	{
		ctx.fillStyle = "black"
		ctx.fillRect(x, y, snake_size, snake_size)

		y = y + 50

		ctx.fillStyle = "green"
		ctx.fillRect(x, y, snake_size, snake_size)
	}
	else alert("Can't move down, you are dead!")
}

document.addEventListener("keydown", function onEvent(event) {
    if (event.key === "ArrowRight") {
	moveRight()
    }
    else if (event.key === "ArrowLeft") {
        moveLeft()
    }
    else if (event.key === "ArrowUp") {
        moveUp()
    }
    else if (event.key === "ArrowDown") 
    {
        moveDown()
    }
    
    if (x == apple_x && y == apple_y)
    {
	apples_eaten++
	drawSnake()
	randomApple()
    }	
});
