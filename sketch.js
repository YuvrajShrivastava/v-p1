//Create variables here
var dog,happyDog,foodStock,dogI,database
var foodS =-1;
function preload()
{
	//load images here
  dogI = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(250,250,50,50);
  dog.scale = 0.5;
  dog.addImage(dogI)
}


function draw() {  
  background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(20);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  text("foodStock: "+foodStock , 100,100)

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x = x-1
  })
}
