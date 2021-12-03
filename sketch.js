var bgImg



function preload(){
  bgImg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  drawSprites();
}
