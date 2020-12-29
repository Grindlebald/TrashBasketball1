const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,pkg;
var box1, packageBody,package;
var box2, box3
var ground,lol;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();

	world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(827.5,326,15,130);
    box2 = new Box(900,383.5,130,15);
    box3 = new Box(972.5,326,15,130)
    // packageBody = new Ball(800,100,25)
    pkg = Bodies.circle(200 , 285 , 20 , {restitution:0.5, isStatic:false, friction:2000.0, density : 1.0});
	World.add(world, pkg);
}

function draw(){
    background(0);
	Engine.update(engine);
    circle(pkg.position.x,pkg.position.y,40);
	
    ground.display();
    box1.display();
   box2.display();
   
   box3.display();
   
    // packageBody.display();
    keyey();
	drawSprites();;

}
function keyey (){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce( pkg, pkg.position, {x: 5.5, y: -3.5});
    }
    else if (keyCode === DOWN_ARROW) {
        Matter.Body.applyForce( pkg, pkg.position, {x: .0, y: -.0});
    }
}
