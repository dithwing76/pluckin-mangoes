const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var bird, slingShot;
var rock1
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    
    ground = new Ground(600,height,1200,20);
   

    bird = new Bird(100,100);

    rock1 = new Box(100,100,600,200);

    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    rock1.display()

    bird.display();
    
 
    slingshot.display();   
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}