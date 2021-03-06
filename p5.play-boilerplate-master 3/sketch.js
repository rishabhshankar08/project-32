const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var engine = Engine.create;
var world = Engine.world;

var ball;

var blower;
var blowermouth;

var blowBtn;

function setup() {
  createCanvas(windowWidth, windowHeight);

  ball = new Ball(width / 2 + 80, height / 2);

  blower = new Blower(width / 2, height - 200);

  blowermouth = new Blowermouth(width / 2 - 200, height - 130);

  blowBtn = createButton("Blow Ball");
  blowBtn.position(blower.body.position.x + 250, blower.body.position.y + 50);
  blowBtn.class("blowButton");
  blowBtn.mousePressed(blow);
}

function draw() {
  background(0, 0, 0);

  ball.display();

  blower.display();

  blowermouth.display();

  Engine.update(engine)
}
function blow(){
    Matter.Body.applyForce(ball,{x: 0, y: 0}, {x: 0, y: 0.0005});
}