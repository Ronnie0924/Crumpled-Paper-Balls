
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var groundObj;

var leftSide;
var rightSide;



function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	groundObj = new Ground(400, 700, 800, 20);

	leftSide = new Ground(600, 630, 20, 120);
	rightSide = new Ground(790, 630, 20, 120);

    ball = Bodies.circle(100, 200, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	groundObj.show();

	leftSide.show();
	rightSide.show();

	ellipseMode(RADIUS);
	ellipse(ball.position.x, ball.position.y, 20, 20);
	

}

function keyPressed() {
	
	if (keyCode === UP_ARROW){

			Matter.Body.applyForce(ball, ball.position, {x:62, y:-62})

}
}

