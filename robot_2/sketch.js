var x=0;
function setup() {
createCanvas(windowWidth, 1500);
background(200);
noStroke();
}

function draw() {
	fill("powderblue");
	background(200);
  // face
  rect(430 + x, 170 , 150, 150);
  // head and wheels
  fill("black");
  arc(505+x, 170, 150, 130, PI, 0, OPEN);
  arc(435+x, 835, 30, 30, 0, PI, OPEN);
  arc(575+x, 835, 30, 30, 0, PI, OPEN);
  fill("white");
  // eyes
  ellipse(480+x, 205, 15, 30);
  ellipse(530+x, 205, 15, 30);
  fill("brown");
  // eyes
  ellipse(480+x, 213, 10, 15);
  ellipse(530+x, 213, 10, 15);
  //legs and arms
  rect(420+x, 805, 170, 30);
  rect(265+x, 500, 30, 150);
  rect(705+x, 500, 30, 150);
  arc(280+x, 650, 30, 30, 0, PI, OPEN);
  arc(720+x, 650, 30, 30, 0, PI, OPEN);
  // mouth
  rect(482+x, 250, 35, 05);
  arc(500+x, 260, 35, 25, 0, PI, OPEN);
  fill("green")
  // body
  ellipse(500 + x, 550, 400, 500);
  x+=1;
  if (x > 500){
  	x=0;
  	clear();
  }
}