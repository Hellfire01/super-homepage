var speed = 10;
var pos_0 = 100 + speed;
var pos_1 = 200 + speed;
var pos_2 = 300 + speed;
var pos_3 = 400 + speed;


function move_clip_0() {
	var timeout = true;
	pos_0 -= speed;
	if (pos_0 <= 0) {
	    timeout = false;
	    pos_0 = 500;
	    setTimeout('move_clip_0()', (Math.round(Math.random() * 2000)));
	}
	document.getElementById("hero-line-0").style.clip = "rect("+(pos_0 - 50)+"px, 350px, "+pos_0+"px, 0)";
	if (timeout == true) {
	    setTimeout('move_clip_0()', 50);
	}
}

function move_clip_1() {
	var timeout = true;
	pos_1 -= speed;
	if (pos_1 <= 0) {
	    timeout = false;
	    pos_1 = 500;
	    setTimeout('move_clip_1()', (Math.round(Math.random() * 3000)));
	}
	document.getElementById("hero-line-1").style.clip = "rect("+(pos_1 - 50)+"px, 350px, "+pos_1+"px, 0)";
	if (timeout == true) {
	    setTimeout('move_clip_1()', 50);
	}
}

function move_clip_2() {
	var timeout = true;
	pos_2 -= speed;
	if (pos_2 <= 0) {
	    timeout = false;
	    pos_2 = 500;
	    setTimeout('move_clip_2()', (Math.round(Math.random() * 1000)));
	}
	document.getElementById("hero-line-2").style.clip = "rect("+(pos_2 - 50)+"px, 350px, "+pos_2+"px, 0)";
	if (timeout == true) {
	    setTimeout('move_clip_2()', 50);
	}
}

function move_clip_3(){
	var timeout = true;
	pos_3 -= speed;
	if (pos_3 <= 0) {
	    timeout = false;
	    pos_3 = 500;
	    setTimeout('move_clip_3()', (Math.round(Math.random() * 4000)));
	}
	document.getElementById("hero-line-3").style.clip = "rect("+(pos_3 - 50)+"px, 350px, "+pos_3+"px, 0)";
	if (timeout == true) {
	    setTimeout('move_clip_3()', 50);
	}
}
