const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var rock_img;

function preload(){
  ballImg = loadImage("rock.png");
}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  box1 = new Block(300,275,30,40);
  box2 = new Block(330,275,30,40);
  box3 = new Block(360,275,30,40);
  box4 = new Block(390,275,30,40);
  box5 = new Block(420,275,30,40);
  box6 = new Block(450,275,30,40);
  box7 = new Block(480,275,30,40);

  box8 = new Block(330,235,30,40);
  box9 = new Block(360,235,30,40);
  box10 = new Block(390,235,30,40);
  box11 = new Block(420,235,30,40);
  box12 = new Block(450,235,30,40);

  box13 = new Block(360,195,30,40);
  box14 = new Block(390,195,30,40);
  box15 = new Block(420,195,30,40);

  box16 = new Block(390,155,30,40);

  box17 = new Block(640,175,30,40);
  box18 = new Block(670,175,30,40);
  box19 = new Block(700,175,30,40);
  box20 = new Block(730,175,30,40);
  box21 = new Block(760,175,30,40);

  box22 = new Block(670,135,30,40);
  box23 = new Block(700,135,30,40);
  box24 = new Block(730,135,30,40);

  box25 = new Block(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new Slingshot(this.ball,{x:100,y:200});
  


}

function draw() {
  background(255, 170, 165);
  imageMode(CENTER);
  image(ballImg,ball.position.x,ball.position.y,40,40);
  ground.display();

  fill(255, 229, 59);
  stand1.display();
  stand2.display();

  fill(53, 167, 156);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill(84, 178, 169);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill(101, 195, 186);
  box13.display();
  box14.display();
  box15.display();

  fill(131, 208, 201);
  box16.display();

  fill(53, 167, 156);
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill(84, 178, 169);
  box22.display();
  box23.display();
  box24.display();

  fill(101, 195, 186);
  box25.display();

  slingshot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
    slingshot.attach(this.ball);
  }
}