var num=5;
var word="salma";
var x;
var bool=true;
var y=null;


var arr1=[12,34,56,67,78,89];
console.log(arr1[3]);

var arr2=[5,"salma",true,null];
console.log(arr2[3]);

var arr3=[[1,2],[3,4],[5,6]];
console.log(arr3[1][1]);

arr1.push(100);
console.log(arr1);

arr1.pop();
arr1.pop(12);
console.log(arr1);





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(735,320,70,70);
    box2 = new Box(885,320,70,70);
    pig1 = new Pig(805, 320);
    log1 = new Log(810,310,220, PI/2);

    box3 = new Box(735,290,70,70);
   box4 = new Box(885,290,70,70);
    pig3 = new Pig(805, 290);

   log3 =  new Log(810,180,220, PI/2);

 box5 = new Box(805,160,60,60);
 log4 = new Log(760,120,120, PI/7);
 log5 = new Log(865,140,120, -PI/7);

    bird = new Bird(200,50);

    log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

   box3.display();
   box4.display();
    pig3.display();
   log3.display();

  box5.display();
   log4.display();
  log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(bird.body, {x:200,y:50})
        slingshot.attach(bird.body);
    }
}