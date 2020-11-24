
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var ground;

var dustbin1,dustbin2,dustbin3;

function preload()
{
	dustbinImg = loadImage('dustbin.png');
}

function setup() {
	createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

  	paper = new Paper (200,300,30);
    
	  dustbin1 = new Rect (800,280,15,230);
    dustbin2 = new Rect (900,380,200,15);
    dustbin3 = new Rect (1000,280,15,230);

    ground = new Ground (600,395,1200,10);

    Engine.run(engine);
      
}


function draw() {

  rectMode(CENTER);
  background('white');

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  image(dustbinImg,775,165,270,230)

  drawSprites();
  
}

function keyPressed(){

	if (keyCode===UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x : 160,y : -200})

	}

}

