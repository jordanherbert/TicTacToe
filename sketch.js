// 6.1: 1,2;
// 6.2: 1,2,4;
let can;
let p,p1;
let f=false;
let v = [];
function setup(){
  
  for(i=0;i<9;i++){
  	v[i]=0;
  }
  can=createCanvas(600, 600);
  can.position(50,50);
  can.class("bord");
  p=createP('Tic Tac Toe')
  p.position(325,(-15));
  p.class("bdd");
  p1=createP('How to play: Select the surface you would like to play on. Then, click on the square you would like to play. X goes first, then O. When the game is over, press Reset, and then select the surface you want to play on to play again. O will now go first as it alternates each game. The standard game is like playing on a 3x3 flat grid. If no surface is selected, that is the game that will play. Enjoy 😃')
  p1.position(665,33.5);
  p1.class("bord");
  p1.style('width', '330px');
  background(0);
  noSmooth();
  stroke(255);
  grid();
  fill(0,255,0);
 radio = createRadio();radio.position(20,0);
 radio.option('Reset',1);
 radio.option('*Standard',3);
 radio.option('*Cylinder',4);

 radio.class('bord');
	anch=select('#sier');
	anch.position(0,0);
	anch.class("bord");
}

function draw(){
  winner1();
 var val = radio.value();

  switch(val){
 case '1': reset();
 for(i=0;i<9;i++){v[i]=0;}
	break;
  
 case '3': play();
 winner1();
 break;

 case '4': play();
 winner2()
 break;
 }

 if((mouseX > 0) && (mouseX <= width/3) && (mouseY > 0) && (mouseY <=height/3) && (mouseIsPressed==true) && (v[0]==0) && (f==false)){x1();v[0]=1;f=!f;}
 if((mouseX <= 2*width/3) && (mouseX > width/3) && (mouseY > 0) && (mouseY <=height/3) && (mouseIsPressed==true)&& (v[1]==0) && (f==false)){x2();v[1]=1;f=!f;}
 if((mouseX <= width) && (mouseX > 2*width/3) && (mouseY > 0) && (mouseY <=height/3) && (mouseIsPressed==true)&& (v[2]==0) && (f==false)){x3();v[2]=1;f=!f;}
 if((mouseX <= width/3) && (mouseY <=2*height/3) && (mouseY > height/3) && (mouseIsPressed==true)&& (v[3]==0) && (f==false)){x4();v[3]=1;f=!f;}
 if((mouseX <= 2*width/3) && (mouseX > width/3) && (mouseY <=2*height/3) && (mouseY >height/3) && (mouseIsPressed==true)&& (v[4]==0) && (f==false)){x5();v[4]=1;f=!f;}
 if((mouseX <= width) && (mouseX > 2*width/3) && (mouseY <=2*height/3) && (mouseY > height/3) && (mouseIsPressed==true)&& (v[5]==0) && (f==false)){x6();v[5]=1;f=!f;}
 if((mouseX <= width/3) && (mouseY <=height) && (mouseY > 2*height/3) && (mouseIsPressed==true)&& (v[6]==0) && (f==false)){x7();v[6]=1;f=!f;}
 if((mouseX <= 2*width/3) && (mouseX > width/3) && (mouseY <=height) && (mouseY > 2*height/3) && (mouseIsPressed==true)&& (v[7]==0) && (f==false)){x8();v[7]=1;f=!f;}
 if((mouseX <= width) && (mouseX > 2*width/3) && (mouseY <=height) && (mouseY > 2*height/3) && (mouseIsPressed==true)&& (v[8]==0) && (f==false)){x9();v[8]=1;f=!f;}

 if((mouseX > 0) && (mouseX <= width/3) && (mouseY > 0) && (mouseY <=height/3) && (mouseIsPressed==true) && (v[0]==0) && (f==true)){o1();v[0]=-1;f=!f;}
 if((mouseX <= 2*width/3) && (mouseX > width/3) && (mouseY > 0) && (mouseY <=height/3) && (mouseIsPressed==true) && (v[1]==0) && (f==true)){o2();v[1]=-1;f=!f;}
 if((mouseX <= width) && (mouseX > 2*width/3) && (mouseY > 0) && (mouseY <=height/3) && (mouseIsPressed==true) && (v[2]==0) && (f==true)){o3();v[2]=-1;f=!f;}
 if((mouseX <= width/3) && (mouseY <=2*height/3) && (mouseY > height/3) && (mouseIsPressed==true) && (v[3]==0) && (f==true)){o4();v[3]=-1;f=!f;}
 if((mouseX <= 2*width/3) && (mouseX > width/3) && (mouseY <=2*height/3) && (mouseY >height/3) && (mouseIsPressed==true) && (v[4]==0) && (f==true)){o5();v[4]=-1;f=!f;}
 if((mouseX <= width) && (mouseX > 2*width/3) && (mouseY <=2*height/3) && (mouseY > height/3) && (mouseIsPressed==true) && (v[5]==0) && (f==true)){o6();v[5]=-1;f=!f;}
 if((mouseX <= width/3) && (mouseY <=height) && (mouseY > 2*height/3) && (mouseIsPressed==true) && (v[6]==0) && (f==true)){o7();v[6]=-1;f=!f;}
 if((mouseX <= 2*width/3) && (mouseX > width/3) && (mouseY <=height) && (mouseY > 2*height/3) && (mouseIsPressed==true) && (v[7]==0) && (f==true)){o8();v[7]=-1;f=!f;}
 if((mouseX <= width) && (mouseX > 2*width/3) && (mouseY <=height) && (mouseY > 2*height/3) && (mouseIsPressed==true) && (v[8]==0) && (f==true)){o9();v[8]=-1;f=!f;}
}

