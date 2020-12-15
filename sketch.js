var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxSide1,boxSide2,boxSide3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSide1=createSprite(400,groundSprite.y-15,110,20)
	boxSide1.shapeColor="green"
	boxSide2=createSprite(340,groundSprite.y-60,20,110)
	boxSide2.shapeColor="green"
	boxSide3=createSprite(460,groundSprite.y-60,20,110)
	boxSide3.shapeColor="green"

	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//making bodies for box's sides
	boxBody1=Bodies.rectangle(400,groundSprite.y-15,110,20,{isStatic:true})
	World.add(world,boxBody1)

	boxBody2=Bodies.rectangle(340,groundSprite.y-60,20,110,{isStatic:true})
	World.add(world,boxBody2)

	boxBody3=Bodies.rectangle(460,groundSprite.y-60,20,110,{isStatic:true})
	World.add(world,boxBody3)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  boxSide1.x=boxBody1.position.x
  boxSide1.y=boxBody1.position.y

  boxSide2.x=boxBody2.position.x
  boxSide2.y=boxBody2.position.y

  boxSide3.x=boxBody3.position.x
  boxSide3.y=boxBody3.position.y

  if(packageSprite.isTouching(boxSide1)){
	  packageBody.restitution=0
	  packageBody.isStatic=true
	  restitution=0
  }
  if(packageSprite.isTouching(boxSide1)){
	packageBody.restitution=0
   
   packageBody.isStatic=true
}
if(packageSprite.isTouching(boxSide1)){
	packageBody.restitution=0
   
   packageBody.isStatic=true
}


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false)
    
  }
}


