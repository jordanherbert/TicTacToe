function grid(){
	stroke(0,255,0);
	strokeWeight(3);
 line(width/3,0,width/3,height);
 line(2*width/3,0,2*width/3,height);
 line(0,height/3,width,height/3);
 line(0,2*height/3,width,2*height/3);
 stroke(255);
 strokeWeight(1.5);
}

function winner1(){
	textSize(20);
	fill(0,255,0);
	if(v[0]+v[1]+v[2]===3 || 
	   v[3]+v[4]+v[5]===3 ||
	   v[6]+v[7]+v[8]===3 ||

	   v[0]+v[3]+v[6]===3 || 
	   v[1]+v[4]+v[7]===3 ||
	   v[2]+v[5]+v[8]===3 ||

	   v[0]+v[4]+v[8]===3 || 
	   v[6]+v[4]+v[2]===3 ){text('X Wins',width/2,height/2);}

    if(v[0]+v[1]+v[2]===-3 || 
	   v[3]+v[4]+v[5]===-3 ||
	   v[6]+v[7]+v[8]===-3 ||

	   v[0]+v[3]+v[6]===-3 || 
	   v[1]+v[4]+v[7]===-3 ||
	   v[2]+v[5]+v[8]===-3 ||

	   v[0]+v[4]+v[8]===-3 || 
	   v[6]+v[4]+v[2]===-3 ){text('O Wins',width/2,height/2);}

}


function winner2(){
	textSize(20);
	fill(0,255,0);
	if(v[0]+v[1]+v[2]===3 || //horizontal
	   v[3]+v[4]+v[5]===3 ||
	   v[6]+v[7]+v[8]===3 ||

	   v[0]+v[3]+v[6]===3 || //vertical
	   v[1]+v[4]+v[7]===3 ||
	   v[2]+v[5]+v[8]===3 ||

	   v[0]+v[4]+v[8]===3 || //diagonal
	   v[6]+v[4]+v[2]===3 ||

	   v[0]+v[5]+v[7]===3 || //cylander
	   v[1]+v[3]+v[8]===3 ||
	   v[7]+v[3]+v[2]===3 ||
	   v[1]+v[5]+v[6]===3 ){text('X Wins',width/2,height/2);}

    if(v[0]+v[1]+v[2]===-3 || //horizontal
	   v[3]+v[4]+v[5]===-3 ||
	   v[6]+v[7]+v[8]===-3 ||

	   v[0]+v[3]+v[6]===-3 || //vertical
	   v[1]+v[4]+v[7]===-3 ||
	   v[2]+v[5]+v[8]===-3 ||

	   v[0]+v[4]+v[8]===-3 || //diagonal
	   v[6]+v[4]+v[2]===-3 ||

	   v[0]+v[5]+v[7]===-3 || //cylander
	   v[1]+v[3]+v[8]===-3 ||
	   v[7]+v[3]+v[2]===-3 ||
	   v[1]+v[5]+v[6]===-3){text('O Wins',width/2,height/2);}

}
function reset(){
	background(0);
	grid();
}

function play(){
	grid();
}


function x1(){
	stroke(0,255,0);
	line(0,0,width/3,height/3);
	line(0,height/3,width/3,0);
	return true;
}
function x2(){stroke(0,255,0);
	line(width/3,0,2*width/3,height/3);
	line(width/3,height/3,2*width/3,0);
	return true;
}
function x3(){stroke(0,255,0);
	line(2*width/3,0,width,height/3);
	line(2*width/3,height/3,width,0);
	return true;
}
function x4(){stroke(0,255,0);
	line(0,height/3,width/3,2*height/3);
	line(0,2*height/3,width/3,height/3);
	return true;
}
function x5(){stroke(0,255,0);
	line(width/3,height/3,2*width/3,2*height/3);
	line(width/3,2*height/3,2*width/3,height/3);
	return true;
}
function x6(){stroke(0,255,0);
	line(2*width/3,height/3,width,2*height/3);
	line(2*width/3,2*height/3,width,height/3);
	return true;
}
function x7(){stroke(0,255,0);
	line(0,2*height/3,width/3,height);
	line(0,height,width/3,2*height/3);
	return true;
}
function x8(){stroke(0,255,0);
	line(width/3,2*height/3,2*width/3,height);
	line(width/3,height,2*width/3,2*height/3);
	return true;
}
function x9(){stroke(0,255,0);
	line(2*width/3,2*height/3,width,height);
	line(2*width/3,height,width,2*height/3);
	return true;
}



function o1(){stroke(0,255,0);
	noFill();
	ellipse(width/6,height/6,height/3-10);
}
function o2(){stroke(0,255,0);
	noFill();
	ellipse(width/2,height/6,height/3-10);
}
function o3(){stroke(0,255,0);
	noFill();
	ellipse(5*width/6,height/6,height/3-10);
}
function o4(){stroke(0,255,0);
	noFill();
	ellipse(width/6,height/2,height/3-10);
}
function o5(){stroke(0,255,0);
	noFill();
	ellipse(width/2,height/2,height/3-10);
}
function o6(){stroke(0,255,0);
	noFill();
	ellipse(5*width/6,height/2,height/3-10);
}
function o7(){stroke(0,255,0);
	noFill();
	ellipse(width/6,5*height/6,height/3-10);
}
function o8(){stroke(0,255,0);
	noFill();
	ellipse(width/2,5*height/6,height/3-10);
}
function o9(){stroke(0,255,0); 
	noFill();
	ellipse(5*width/6,5*height/6,height/3-10);
}


function radio(){
	radio = createRadio();
	radio.position(width/6,height/6);
    radio.option('X',1);
    radio.option('O',2);
}
function radio2(){
	radio2 = createRadio();
   radio2.position(width/2,height/2);
   radio2.option('X',3);
   radio2.option('O',4);
}
