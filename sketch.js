let x
let y
let dx
let dy
let radius
let r
let g
let b
let bg


function setup() {
  createCanvas(400, 400)
  createRandomBGColor()
  // ----------------------
  // Task 1 
  // All four of these function calls make the body of setup cleaner. 
  //   They also are all related to the same idea– setting up the properties
  //   of the ball. 
  // Create a function called createBall that does all of these things.
  //   What parameters should it have, if any?
  // ----------------------
  createBall()
  createRandomColor()
  
  function createBall() {
  setRandomPosition()
  setRandomVelocity()
  radius = random(10,20)
  createRandomColor()
  noStroke()
}
  
  function createColorControl() {
  colorChangeRate = 2
  colorDirection = 1
}

}
function draw() {
  background(bg)
  fill(color(r,g,b))
  circle(x,y,radius)
  x += dx // x = x + dx
  y += dy // y = y + dy

  }   

  if (x < 0 || x > width) {
    dx *= -1;
  }
  if (y < 0 || y > height) {
    dy *= -1;
  
  
  // Task 3 
  // If you're paying attention, you'll note that the ball isn't bouncing
  //   when it hits the edge, but rather when the center hits the edge. 
  // Adjust the boundary checks to make it so that ball bounces when it 
  //   first hits the edge
  if ( x - 0.5*radius <= 0 || x + 0.5*radius >= width ) {
  dx *= -1
  }
  if ( y - 0.5*radius <= 0 || y + 0.5*radius >= height ) {
    dy *= -1
  }
    
  // Task 4a
  // Write code that incrementally changes at least one of the color channel
  //   channels (r,g,b). You can increase or decrease the value(s) and by
  //   however much you like between 0.1 and 15

     r += colorChangeRate * colorDirection 
  // Task 4b
  // Remember that the range of color values are integers from 0-255. 
  // Write code that constrains the changing color channel value(s) to that
  //   range by "wrapping" the values around (a number greater than 255 
  //   becomes a number above zero, and a number less than zero becomes a
  //   number greater than zero)
  // ALTERNATIVELY
  // Write code that bounces the number back and forth between 0 and 255 by
  //   alternately increasing the value to 255 then decreasing it down to 0
  //   and then bouncing it back. This will require a number of changes
  
}
  if ( r > 255 || r < 0) {
    colorDirection *= -1
  }

// Task 5
// default parameter values. 
// You can see when we call this function in setup, we don't pass any values in.
// In that case, the defaults are used. 
// uncomment the following line and then update the body of the function to use
//   xMin, xMax, yMin, and yMax in the random calls
// Then, in setup, change the setRandomPosition call to specify where your ball
//   should roughly be at the start. 

function setRandomPosition( xMin = 0, yMin = 0, xMax = width, yMax = height) {
  x = random(xMin , xMax)
  y = random(yMin, yMax)
}

function setRandomPosition() {
  x = random(width)
  y = random(height)  
}

function setRandomVelocity() {
  dx = random(-1,1)
  dy = random(-1,1)  
}

function createRandomColor() {
  r = random(255)
  g = random(255)
  b = random(255)
}

function createRandomBGColor() {
  bg = color(random(255), random(255), random(255))
}

// ----------------------
// Task 6
// Create a new ball here also
// ----------------------
function keyPressed() {
  createRandomBGColor()
  createball()
}

/** 
Hex Codes for the Official Avenues Colors 

#ffffff (white)
#000000 (black)
#B7B09C (ash)
#D3AE6F (ochre)
#3D68B2 (indigo)
#267355 (moss)
#44C3D4 (pristine blue)
#9796C9 (violet)
#CAC3BC (nimbus)
#C5D982 (pistachio)
#8A916A (olive)
#C17E60 (terracotta)
#F5CD64 (gold)
#C3411E (clay)
#0D9A48 (grass)
#273879 (navy)
*/
