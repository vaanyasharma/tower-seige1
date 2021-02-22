const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box4,box5,box6,box7,box8,box9,box10;
var ground1,ground2,ground3;
var box11,box12,box13,box14,box4,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27;
var polygon;
var ball;
var slingShot;

function preload(){
  polygonImage=loadImage("polygon.png");

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,380,1200,20);
    ground2 = new Ground(600,325,300,20);
    ground3 = new Ground(950,180,250,20)
    box1 = new Box(500,310);
    box2 = new Box(530,310);
    box3 = new Box(560,310);
    box4 = new Box(590,310);
    box5 = new Box(620,310);
    box6 = new Box(650,310);
    box7 = new Box(680,310);
    //box8 = new Box(500,270);
    box9 = new Box(530,270);
    box10 = new Box(560,270);
    box11 = new Box(590,270);
    box12 = new Box(620,270);
    box13 = new Box(650,270);
   // box14 = new Box(530,270);
   box15 = new Box(560,230);
   box16 = new Box(590,230);
   box17 = new Box(620,230);
   box18 = new Box(590,190);
   box19 = new Box(900,160);
  box20 = new Box(930,160);
   box21 = new Box(960,160);
   box22 = new Box(990,160);
   box23 = new Box(1020,160);
   box24 = new Box(930,120);
   box25 = new Box(960,120);
   box26 = new Box(990,120);
   box27 = new Box(960,80);
   ball=Bodies.circle(100,100,20);
  World.add(world,ball);
  slingShot=new SlingShot(this.ball,{x:150,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("blue");
   // box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    //box14.display();
    fill("cyan");
    box15.display();
    box16.display();
    box17.display();
    fill("yellow");
    box18.display();
    fill("blue");
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    fill("cyan");
    box24.display();
    box25.display();
    box26.display();
    fill("yellow");
    box27.display();
    image(polygonImage,ball.position.x,ball.position.y,40,40);
    slingShot.display();
}
