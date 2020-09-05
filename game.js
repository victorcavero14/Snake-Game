var x = 0
var y = 0
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var snake_size = 50

// Draw the canvas 
ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height)

// Draw snake
ctx.fillStyle = "green"
ctx.fillRect(x, y, snake_size, snake_size)

function moveRight() {
	
	if( x + snake_size < canvas.width)
	{
		ctx.fillStyle = "black"
		ctx.fillRect(x, y, snake_size, snake_size)

		x = x + snake_size

		ctx.fillStyle = "green"
		ctx.fillRect(x, y, snake_size, snake_size)
	}
	else console.log("Can't move right, you are dead!")
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
	else console.log("Can't move left, you are dead!")
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
	else console.log("Can't move up, you are dead!")
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
	else console.log("Can't move down, you are dead!")
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
});
