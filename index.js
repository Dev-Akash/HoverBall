document.getElementById("ene").style.display="none";
var life = 1; 
var score = 0;
var restart_count = 0;
var ball = document.getElementById("ball_obj");
start();
function start(){
	if(life !=0){
		Attack(10);
		document.getElementById("ene").style.display="block";
	}
	else{
		document.getElementById("hover_button").style.disable="true";
		if (restart_count == 0) {
			document.getElementById('panel').style.display = 'block';
			document.getElementById('restart_play_button').innerHTML = "Play";
		}
		else{
			document.getElementById('panel').style.display = 'block';
			document.getElementById('restart_play_button').innerHTML = "Restart";
		}
	}
	setTimeout(start, 2000);
}
function Attack(speed){
	console.log("Attack");
	var P1y= -150;
	var P1x= -450;
	var P2y= -650;
	var P2x= 10;
	var P3y= -100;
	var P3x= 570;
	var t = 0;
	var enemy = document.getElementById("ene");
	enemy.style.display="block";
	score++;
	var id = setInterval(frame, speed);
	function frame(){
		var cy= 0;
		var cx= 0;
		if (t<=100) {
			t++;
			temp = t/100;
			cx = (1-temp)*(1-temp)*P1x + 2*(1-temp)*temp*P2x + (temp)*(temp)*P3x;
			cy = (1-temp)*(1-temp)*P1y + 2*(1-temp)*temp*P2y + (temp)*(temp)*P3y;
			enemy.style.left = cx + 'px';
			enemy.style.top = cy +'px';
			if(cy > -100){
				enemy.style.display = "none";
				life--;
				document.getElementById('life').innerHTML = "Life: "+life;
				clearInterval(id);
			}
			else{
				document.getElementById("score").innerHTML = "Score: "+score;
			}
			btop = ball.getBoundingClientRect().top;
			etopleft = enemy.getBoundingClientRect().left;
			//console.log(btop);
			if(680>parseInt(etopleft) && parseInt(etopleft)> 580){
				if (100 > parseInt(btop) && parseInt(btop)> 1) {
					console.log("collision Occured!!");
					enemy.style.display = "none";
					clearInterval(id);
				}
			}
		}
	}
}

var vol = 0;
count = 0;
function flying() {
	vol += 1;
	var d = setInterval(fly, 15);
	function fly(){
		if (vol == 1) {
			count -= 5; 
			ball.style.top = count + 'px' ;
		}
		else{
			clearInterval(d);	
		}
	}
}
function down(){
	vol = 0;
	var d1 = setInterval(drag, 15);
	function drag(){
		if (vol == 0) {
			if(count !=0){
				count += 5;
				ball.style.top = count+'px';
			}
			else{
				clearInterval(d1);
			}
		}
	}
}
function addLife(){
	restart_count++;
	document.getElementById('panel').style.display = "none";
	life = 10;
	document.getElementById('life').innerHTML = "Life: "+life;
	score = 0;
	document.getElementById("score").innerHTML = "Score: "+score;
}
function closeGame(){
	console.log("Closing Game !!!");
	document.getElementById("restart_play_button").style.display = 'none';
	document.getElementById("quit_button").style.display = 'none';
	document.getElementById("thanks").style.display = "block";
}