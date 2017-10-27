var playerPosition = [];
var enemyPositon = [];
var playerBullets = [];
var enemyBullets = [];


function setup() {

//        x = width and y = height ;3
	createCanvas(600,400);

	background(200);

	line(0,0,width,height);
	playerPosition = [(width/2),(height-50)];



}



function draw() {

	background(0);
	//movePlayer(-2.5,-1.3);
	getInput()

	drawPlayer(playerPosition[0],playerPosition[1]);
	drawPlayer(width/2,height/2);
	// this mark the screen center
  	stroke(255,0,0)
  	strokeWeight(5);
  	point((width/2),(height/2));




}

function getInput(){

	var dx = 0;
	var dy = 0;
	var speed = 2;
	if (keyIsDown(LEFT_ARROW)){
		dx = dx - speed;
	}
	if (keyIsDown(RIGHT_ARROW)){
		dx = dx + speed;
	}
	movePlayer(dx,dy);
}

// player functions 

function drawPlayer(x,y){
	push();
	rectMode(CENTER)
	fill(0,0,255);
	noStroke()
	rect(x,y,20,30);
	pop();

}



function movePlayer(dx,dy){
	playerPosition[0] = playerPosition[0] + dx  ;
	playerPosition[1] = playerPosition[1] + dy  ;

}








// enemy functions

// bullet functions



