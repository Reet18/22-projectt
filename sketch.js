
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
let engine;
let world;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 550);
engine= Engine.create();
world= engine.world;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
ball= Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(200,520,2020,20);
	leftSide= new Ground(700,440,20,140);
	rightSide= new Ground(900,440,20,140);



	Engine.run(engine);
  ellipseMode(RADIUS);
  rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ground.show();
  leftSide.show();
  rightSide.show();
 ellipse(ball.position.x,ball.position.y,20);
}

function KeyPressed(){
	if(KeyCode=== UP_ARROW){
	Body.applyForce(ball,{x:ball.position.x,y:ball.posiyion.y},{x:0.05,y:0});
	}
}

