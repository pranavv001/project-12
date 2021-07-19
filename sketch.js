var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  if (frameCount % 80 === 0) {
    if (select_sprites === 1) {
      createApples()
    }
     else {
    createLeaves()
  }
}

function createApples() {
  apples = createSprite(random(50, 350), 40, 10, 10)
  apples.addImage(applesImg);
  apples.velocityY = 2
  apples.scale = 0.1
}
function createLeaves() {
  orangeLeaf = createSprite(random(50,350), 40, 10, 10)
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY = 2
  orangeLeaf.scale = 0.1
}