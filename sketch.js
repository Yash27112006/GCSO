var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color("black");
  
  car=createSprite(50,200,50,50,weight);
  car.velocityX=speed;
  car.shapeColor=color("black");
}

function draw() {
  background("pink");
  if(wall.x-car.x < wall.width/2+car.width/2  ){
     car.velocityX=0;
     var deformation = 0.5 * weight * speed * speed/22509;
     
     textSize(40);
     fill("black");

     if(deformation>180){
        car.shapeColor=color("red");
        text("Rating: D ",650,200)
        text("LETHAL FOR PASSENGERS",500,260)
     }

     if(deformation<180 && deformation>100){
        car.shapeColor=color(230,230,0);
        text("Rating: B ",655,200)
        text("IT'A AVERAGE FOR PASSENGERS",410,260)
     }

     if(deformation<100){
      car.shapeColor=color(0,255,0);
      text("Rating: A ",660,200)
      text("GOOD FOR PASSENGERS",500,260)
   }
  }
  

  drawSprites();
}
