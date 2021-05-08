var PLAY = 1;
var END = 0;
var gameState = PLAY;
var one,oneImage;
var ground,groundImage;
//var bg,bgImg
var green,greenImg,blue,blueImg ;
var np,npImg;
var sand,sImg;
var banana,bImg;
var apple,aImg;
var w,wImg;
var score=0;
var t,tImg;
var r,rImg;
var bg;
var plastic,pimg;
var wpaper;
var kWaste;
var beep;
var gjob;
var group;
var select;
var dry,dryGroup;
var wet,wetGroup;
var flag = 1;
var j;

function preload(){
//groundImage = loadImage("ground2.png");
  blueImg = loadImage("images/bluebin.png")
  greenImg = loadImage("images/greenbin.png")
  sImg = loadImage("images/sand.png")
  npImg = loadImage("images/paperc.png") 
  pimg = loadImage("images/dry waste 3.png")
  bImg = loadImage("images/banana.png")
  aImg = loadImage("images/apple.png")
  //bgImg = loadImage("1.jpg")
  wImg = loadImage("images/wrong.png")
  tImg = loadImage("images/tick.png")
  rImg = loadImage("images/restart.png")
  bg = loadImage('images/bg2.jpg');
  kImg = loadImage("images/garbage wet 2.png")
  beep = loadSound("images/beep.mp3");
  gjob = loadSound("images/good job.mp3")

}
function setup(){
   createCanvas(displayWidth,displayHeight-115);

   green = createSprite(displayWidth/2-95, displayHeight-170);
   green.addImage("green1",greenImg)
   green.scale = 0.8
  
   blue = createSprite(displayWidth/2+95, displayHeight-170);
   blue.addImage("blue",blueImg)
   blue.scale = 0.8

   dryGroup = createGroup();
   wetGroup = createGroup();

   
   /* select = createSprite(random(displayWidth/2-155, displayWidth/2+155), random(100, displayHeight-400), 20, 20)
    select.shapeColor = "red"
   // select.velocityY = 1
    group.add(select);
    group.setVelocityYEach(1);
    */
   
  


  
}


function draw() {
  background(bg)
  
  drawSprites();

  textSize(25)
  fill("black")
  text("Score: "+ score, displayWidth/2-50,50);

  /*
  fill(0,128,0);
  text("Please throw wet waste in green dustbin",50,60);
  fill(0,0,255)
  text("Please throw dry waste in blue dustbin",50,90);
  */

  if(frameCount % 85 === 0){
    dry = createSprite(random(displayWidth/2-155, displayWidth/2+155), random(100, displayHeight-400), 20, 20)
    dry.velocityY=2;
    dry.shapeColor = "blue"
    dryGroup.add(dry);
  }

  if(frameCount % 75 === 0){
    wet = createSprite(random(displayWidth/2-155, displayWidth/2+155), random(100, displayHeight-400), 20, 20)
    wet.velocityY=2;
    wet.shapeColor = "green"
    wetGroup.add(wet);
  }

  for(var i=0;i<dryGroup.length;i++){
  if(mousePressedOver(dryGroup.get(i))){
    dryGroup.get(i).x = mouseX;
    dryGroup.get(i).y = mouseY;
  }
}

  for(var i=0;i<dryGroup.length;i++){

    if(dryGroup.get(i).isTouching(green)){
      dryGroup.get(i).destroy();
      score=score-10;
    }
    if(dryGroup.get(i).isTouching(blue)){
      dryGroup.get(i).destroy();
      score=score+10;
    }
  }

  

  for(var i=0;i<wetGroup.length;i++){
    if(wetGroup.get(i).isTouching(green)){
      wetGroup.get(i).destroy();
      score=score+10;
    }
    if(wetGroup.get(i).isTouching(blue)){
      wetGroup.get(i).destroy();
      score=score-10;
    }
  }

  }

  





