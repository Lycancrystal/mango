
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1110,100,30);
	mango2=new mango(1120,100,30);
	mango3=new mango(1130,100,30);
	mango4=new mango(1140,100,30);
	mango5=new mango(1150,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  

  treeObj.display();
  mango1.display();
  mango3.display();
  mango4.display();
  mango3.display();
  mango5.display();

  groundObject.display();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.body.setPossition(stoneObj.bodu,{
			x :235,
			y :420
		})
		launcherObject.attach(stoneObj.body);
	}
}

function detectollision(lstone,lmango) {
	mangoBody.Position=lmango.body.position
	stoneBody.Position=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x
		,mangoBodyPosition.y)

   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false)
   }
}