var obj1, obj2, car, wall;

function setup() {
  createCanvas(1200,400);
  obj1 = createSprite(400, 200, 50, 50);
  obj1.velocityX = 4;
  obj2 = createSprite(800,200,50,50);
  car = createSprite(400,100,50,50);
  car.velocityX = 3;
  wall = createSprite(800,100,50.100);
}

function draw() {
  background(255,255,255); 
  
  //if(isTouching(car,wall)){
   // car.velocityX = 0;
 // } else {
  //  car.shapeColor = "red";
  //}

  bounceOff(car, wall);

  drawSprites();
}

