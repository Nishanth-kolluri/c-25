const mw = Matter.World;
const mb = Matter.Bodies;
const me = Matter.Engine;

var engine,world;
var abgr,ball,box1,box2,pig1,log1;



function setup() {
  createCanvas(1200,400);
  engine = me.create();
  world = engine.world;
  box1 = new box(700,320,70,70);
  box2 = new box(920,320,70,70);    
  abgr = new ground(600,390,1200,20);
  pig1 = new pig(810,350);
  log1 = new log(810,260,300,PI/2);
}
function draw() {
  background('pink');
  me.update(engine);
  box1.display();
  box2.display();
  abgr.display();
  pig1.display();
  log1.display();
}
