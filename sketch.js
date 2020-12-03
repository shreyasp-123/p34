
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100, 700, 100)

	bob1 = new Bob(240, 600, 40)
	bob2 = new Bob(320, 600, 40)
	bob3 = new Bob(400, 600, 40)
	bob4 = new Bob(480, 600, 40)
	bob5 = new Bob(560, 600, 40)

	rope1 = new Rope(bob1.body, roof.body, -160, 0)
	rope2 = new Rope(bob2.body, roof.body, -80, 0)
	rope3 = new Rope(bob3.body, roof.body, 0, 0)
	rope4 = new Rope(bob4.body, roof.body, 80, 0)
	rope5 = new Rope(bob5.body, roof.body, 160, 0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



function mouseDragged(){
	bob1.body.position.x = mouseX
	bob1.body.position.y = mouseY
}