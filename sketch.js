var bananaimg, bananagroup, obstacleimg, obstaclegroup, backimg, back, unicornimg, unicorn, ground, score;



function preload() {
  
  backimg=loadImage("Jungle4.png");
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("rock.png");

  unicornimg=loadAnimation("Unicorn1.png", "Unicorn2.png", "Unicorn3.png", "Unicorn4.png", "Unicorn5.png", "Unicorn6.png");
}
function setup() {
  createCanvas(800, 600);
  background(225)
  
  score=0;
  
  back=createSprite(300,150);
  back.scale=2
  back.addImage("back", backimg);
  back.velocityX=-5;
  back.x=back.width/2;
  
  unicorn=createSprite(70,300,40,40);
  unicorn.addAnimation ("unicorn", unicornimg);
  unicorn.scale=0.1

  
  
  ground=createSprite(300,300,600,10);
  ground.visible=false;
  
  
  bananagroup = new Group();
  obstaclegroup = new Group();
  
}

function draw() {
  
  edges=createEdgeSprites();
   
  unicorn.collide(ground);
  
  
  if (back.x < 600){
    back.x = back.width/2;
     }
  

     //camera.position.x=displayWidth/2;
   camera.position.y=unicorn.y;

 
  
  if(keyDown(UP_ARROW)&& unicorn.y>=200){
     unicorn.velocityY=-15
    
     }
  
    if(keyDown("space")&& unicorn.y>=200){
     unicorn.velocityY=-15
     }

  if(unicorn.isTouching(bananagroup)){
bananagroup.destroyEach()
    score=score+1
    stroke("white");
    textSize(20);
    fill("white");
    text("score: "+score,700,200)
  }
  
  
  if(unicorn.isTouching(obstaclegroup)){
obstaclegroup.destroyEach()
unicorn.scale=0.1;
  }
  
  
  unicorn.velocityY = unicorn.velocityY + 0.9;
  
  
    stroke("white");
    textSize(20);
    fill("white");
    text("score: "+score,700,200)
  
  
   var rand = Math.round(random(1,6));
    switch(score) {
      case 10: unicorn.scale=0.12;
              break;
      case 20: unicorn.scale=0.14;
              break;
      case 30: unicorn.scale=0.16;
              break;
      case 40: unicorn.scale=0.18;
              break;
      default: break;
    }
   
  score.depth= unicorn.depth;
  
  drawSprites();
  spawnBanana();
  spawnObstacles()
  
  stroke("white");
    textSize(20);
    fill("white");
    text("score: "+score,700,100)
  

}

   
function spawnBanana() {
if(frameCount %100===0){
    banana=createSprite(600,random(90,150));
    banana.addImage ("banana", bananaimg);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.lifetime=1200;
    bananagroup.add(banana);
  }
}

function spawnObstacles(){
 if(World.frameCount %600===0){
    var obstacle=createSprite(600,300);
    obstacle.addImage("obstacle", obstacleimg);
    obstacle.scale=0.20;
    obstacle.velocityX=-5;
    obstacle.lifetime=1200;
   obstaclegroup.add(obstacle);
  }
}

