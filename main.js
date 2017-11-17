var playerPosition = []; 	// Array of 2 numbers, x and y: [x,y]
var enemyPositon = [];		// Array of arrays (1 per enemy) of xy pairs: [ [x1,y1],[x2,y2] ]
var playerBullets = [];		// Array of arrays (1 per enemy) of xy pairs: [ [x1,y1],[x2,y2] ]
var enemyBullets = [];		// Array of arrays (1 per enemy) of xy pairs: [ [x1,y1],[x2,y2] ]
var lastShotFrame = 0;

function setup() {  // p5 function, runs ONCE after everything is loaded.

//        x = width and y = height ;3  Top Left corner is [0,0]
	createCanvas(600,400);
	playerPosition = [(width/2),(height-50)];	// [x, y]
}



function draw() {	// p5 function, runs REPEATEDLY at the frame rate (30 fps).

	background(0);
	getInput()
	playerBullets = moveBullets(playerBullets,-3.5); 
	drawPlayer(playerPosition[0],playerPosition[1]);
	drawBullets(playerBullets,'green');
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

	if (keyIsDown(32)){
		playerShoot();
	}
}

// player functions 

function drawPlayer(x,y){
	push();	// Saves the current drawing style settings (until pop() below).
	rectMode(CENTER)
	fill(0,0,255);
	noStroke()
	rect(x,y,20,30);
	pop(); // Restores the settings before last push()

}



function movePlayer(dx,dy){
	playerPosition[0] = playerPosition[0] + dx  ;
	playerPosition[1] = playerPosition[1] + dy  ;

}

function playerShoot(){
	var fireRateCooldown = 20;
	if( frameCount - lastShotFrame >= fireRateCooldown) {
		playerBullets = createBullet(playerBullets,playerPosition[0],playerPosition[1]);
		lastShotFrame = frameCount;	
	}

}






// enemy functions

// bullet functions


function createBullet(bulletArray,x,y){
	bulletArray.push([x,y]);
	return bulletArray;
}


function drawBullets(bulletArray,bulletColor){
	push();
	stroke(bulletColor)
  	strokeWeight(5);

  	for (let i = 0;i < bulletArray.length; ++i){
  		point(bulletArray[i][0],bulletArray[i][1]);
  	}
  	pop();

}


function moveBullets(bulletArray,dy){

	for (let i=0;i < bulletArray.length;++i){
		bulletArray[i][1] = bulletArray[i][1] + dy;
		if (bulletArray[i][1] <= 0){
			bulletArray.splice(i,1);
		}
	}
	return bulletArray;
}










