
function preload() {
    bg=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
cat=createSprite(870,600)
mouse=createSprite(200,600)
cat.addAnimation("catImg",cat1)
mouse.addAnimation("mouseImg",mouse1)

mouse.scale=0.2
cat.scale=0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("cat0Img",cat4)
    cat.changeAnimation("cat0Img")
cat.scale=0.2
cat.x=300
    mouse.addAnimation("mouse6Img",mouse4)
    mouse.changeAnimation("mouse6Img")
    mouse.scale=0.2

}
    drawSprites();
}


function keyPressed(){

  if(keyCode=LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("cat1Img",cat2)
      cat.changeAnimation("cat1Img")
    
      mouse.addAnimation("mouse1Img",mouse2)
      mouse.changeAnimation("mouse1Img")
      mouse.frameDelay=25
  }


}
