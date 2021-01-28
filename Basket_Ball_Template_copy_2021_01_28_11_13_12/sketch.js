var pos1, pos2, player;
var ball;
var hoop, hoop1, hoop2;
var edges;
var thrown;

function setup() {
  createCanvas(400, 400)
  
  player = createSprite(350, 300)
  pos1 = loadImage('PosImg1.png')
  player.addImage('1', pos1)
  pos2 = loadImage('PosImg2.png')
  player.addImage('2', pos2)
  
  hoop = createSprite(60, 200);
  hoop.scale = 0.5;
  hoop1 = loadImage('Hoop1.png');
  hoop2 = loadImage('Hoop2.png');
  hoop.addImage(hoop1);
  hoop.velocityY = 2;
  hoop.setCollider('rectangle', -122, -40, 32, 160);
  
  edges = createEdgeSprites();
  
  ball = createSprite(360, 212);
  ball.addImage("ball", loadImage('ball.png'));
  ball.scale = 0.7;
  
  thrown = false;
}

function draw() {
  background(200);
  hoop.bounceOff(edges[2]);
  hoop.bounceOff(edges[3]);
  
  if(keyDown('a')) {
    ball.x = 360;
    ball.y = 212;
    ball.setVelocity(0, 0);
    thrown = false;
  }
  
  if(keyDown('space')) {
    player.changeImage('2', pos2);
    console.log('Thonk');
    ball.velocityX = -9; 
    ball.velocityY = -10;
    thrown = true;
  }
  
  if(thrown===true) {ball.velocityY += 0.5;}
  if(keyWentUp('space')) {
    player.changeImage('1', pos1);
  }
  drawSprites();
}



