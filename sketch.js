const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1,stone2,stone3,stone4;
var rubber1,rubber2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(700,350,150,150);
    stone2 = new Stone(800,450,100,100);
    stone3 = new Stone(1000,250,90,90);
    stone4= new Stone(600,150,75,75);
    rubber1 = new Rubber(600,530,70,50);  
    rubber2 = new Rubber(500,550,50,70);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();

    rubber1.display();
    rubber2.display();
    
 
}