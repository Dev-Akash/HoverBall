var enemy = document.getElementById("enemy");
var player = document.getElementById("ball");
var id = 0;
var peaked = false;
var speed = 1;
var playerBottom = 10;
var playerState = false;
var playerId = 0;
var life = 10;

// Attack(speed);
setEventListeners();
 Start();

function Start(){
		if(life != 0){
			Attack();
			life -= 1;
			setTimeout(Start, 2000);
		}
		else{
		}
}

function Attack(speed){
	enemy.style.left = '0%';
	enemy.style.top = '70%';
	peaked = false;
	id = setInterval(move, speed);
}

function move(){
	var src_left, src_top, dest_left, dest_top;
	dest_left = 90;
	dest_top = 0;
	var currentLeft = enemy.style.left;
	var currentTop = enemy.style.top;

	currentLeft = currentLeft.substring(0, currentLeft.length-1);
	currentTop = currentTop.substring(0, currentTop.length-1);	

	currentTop = parseInt(currentTop);
	currentLeft = parseInt(currentLeft);

	if (dest_left < currentLeft || dest_top > currentTop) {
		clearInterval(id);
	}
	else{
		enemy.style.left = (currentLeft + 1) +'%';

		if (currentTop < 10 || peaked) {
			enemy.style.top = (currentTop+1)+ '%';	
			peaked = true;
		}
		else{
			enemy.style.top = (currentTop-1)+ '%';
		}
	}
}

function setEventListeners(){
	document.getElementById("gameCanvas").addEventListener("touchstart", movePlayerUp);
	document.getElementById("gameCanvas").addEventListener("touchend", movePlayerDown);
	initializePlayer();
}

function initializePlayer(){
	player.style.bottom = "10%";
	player.style.left = "50%";
}

function movePlayerUp(){
	playerState = true;
	playerId = setInterval(()=> {
		playerBottom +=1;
		player.style.bottom = playerBottom + '%';
		if (!playerState) {
			clearInterval(playerId);
		}
	}, speed);
}

function movePlayerDown(){
	playerState = false;
	playerId2 = setInterval(()=>{
		if (playerBottom> 10 && !playerState) {
			playerBottom -=1;
			player.style.bottom = playerBottom + '%';
		}
		else{
			clearInterval(playerId2)
		}
	}, speed);
}