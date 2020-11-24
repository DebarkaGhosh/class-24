const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var pig;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  bird = new Bird(100,100);

  box1 = new Box(700,320,70,70);
  box2 = new Box(900,320,70,70);

  box3 = new Box(700,250,70,70);
  box4 = new Box(900,250,70,70);
  box5 = new Box(800,150,70,70);

  ground = new Ground(600,390,1200,20);
  pig = new Pig(800,320);

  pig2 = new Pig(800,250);

  log = new Log(800,260,20,300,PI/2);
  log2 = new Log(800,180,20,300,PI/2);
  log3 = new Log(750,150,20,150,PI/4);
  log4 = new Log(850,150,20,150,-PI/4);
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground.display();

  pig.display();
  pig2.display();

  log.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();
} 