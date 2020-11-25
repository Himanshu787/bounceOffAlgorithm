var gameObject1, gameObject2;


function setup() {
  createCanvas(800,400);
  gameObject1=createSprite(400, 80, 50, 50);
  gameObject2= createSprite(400,350,50,50);

  gameObject1.shapeColor = "green";
  gameObject2.shapeColor="green";

  gameObject1.debug= true;
  gameObject2.debug= true;

  gameObject1.velocityY=1;
  gameObject2.velocityY=-1;
}

function draw() {
  background("lightblue");
    
  bounceOff(gameObject1,gameObject2);
  
  console.log(gameObject2.x-gameObject1.x);
  console.log(gameObject2.width/2+gameObject1.width/2);

  drawSprites();
}
