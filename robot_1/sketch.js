
var x=0
function setup() {
	createCanvas(windowWidth, 1200);
	background(200, 150, 200);
	noStroke();
}

function draw() {
	fill( '#d9b38c');
	beginShape();
	vertex(300, 250);
	vertex(300, 700);
	vertex(600, 700);
	vertex(600, 250);
	endShape();
	fill( '#004422');
	arc(450, 140, 200, 200, 0, PI+QUARTER_PI, OPEN);
	fill("white");
	ellipse(420, 150, 20, 20);
	ellipse(480, 150, 20, 20);
	beginShape();
	vertex(435, 200);
	vertex(470, 200);
	vertex(435, 210);
	vertex(470, 210);
	endShape();
	fill( '#004422');
	beginShape();
	vertex(200, 300);
	vertex(200, 650);
	vertex(280, 650);
	vertex(280, 300);
	endShape();
	beginShape();
	vertex(620, 300);
	vertex(620, 650);
	vertex(700, 650);
	vertex(700, 300);
	endShape();
	beginShape();
	vertex(320, 720);
	vertex(320, 1000);
	vertex(400, 1000);
	vertex(400, 720);
	endShape();
	beginShape();
	vertex(500, 720);
	vertex(500, 1000);
	vertex(580, 1000);
	vertex(580, 720);
	endShape();
}