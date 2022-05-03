var bg
var slepp
var brush
var gym
var astronaut
var edges
var shower
var eat
var move

function preload(){
  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym12.png");
  shower = loadAnimation("bath1.png", "bath2.png")
  eat= loadAnimation("eat1.png", "drink1.png")
  move= loadAnimation("move1.png")
  } 

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  astronaut = createSprite(400,230);
  astronaut.addImage("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg); 
  edges= createEdgeSprites();
  fill("white");
  textSize(20)
  text("INSTRUCCIONES:",100,100)
  fill("white");
  textSize(10)
  text("Flecha hacia arriba = Cepillarse",100,120)
  text("Flecha hacia abajo = Ejercitarse",100,130)
  text("Flecha hacia la izquierda = Comer",100,140)
  text("Flecha hacia la derecha = Bañarse",100,150)
  text("Tecla m = Moverse",100,160)

astronaut.bounceOff(edges)

if (keyDown("UP_ARROW")) {
  astronaut.addAnimation("brusing", brush)
  astronaut.changeAnimation("brusing")
  astronaut.y = 350
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}

if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("GYM", gym)
  astronaut.changeAnimation("GYM")
  astronaut.x = 450
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}

if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("bañarse", shower)
  astronaut.changeAnimation("bañarse")
  astronaut.x = 500
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}

if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("comer", eat)
  astronaut.changeAnimation("comer")
  astronaut.x = 600
  astronaut.velocityX = 0
  astronaut.velocityY = 0
  
}

if (keyDown("m")) {
  astronaut.addAnimation("mover", move)
  astronaut.changeAnimation("mover")
  astronaut.velocityX = 1
  astronaut.velocityY = 1
}





  drawSprites();
}

