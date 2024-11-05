// テキスト「キーボード操作に反応する」
let x, y , vx, vy;
const g = 1; // 重力
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height *14/21;
}

function draw(){
  background(150,190,255);
  fill(255,50,60)//ボールの色
  noStroke()
  ellipse(x, y, 50);
  
  if(keyIsDown(SHIFT)){ speed = highspeed; }
  if(keyIsDown("A".charCodeAt(0))){ x -= speed; }
  if(keyIsDown("D".charCodeAt(0))){ x += speed; }
  if(keyIsDown(" ".charCodeAt(0))){ y -= 10; }
  
  fill(100,200,50)//地面の色
  strokeWeight(3)
  stroke(100,200,50)
  
  rect(0,windowHeight*7/10,windowWidth, windowHeight*3/10)
  speed = 5
  highspeed = 15
 

//イベントハンドラを使用するパターン
// function keyPressed(){
//   speed = 5
//   highspeed = 15
//   if(keyCode == SHIFT){ speed = highspeed; }
//   if(keyCode == "A"){ x -= speed; }
//   else if(keyCode == "D"){ x+= speed; }
//else if(key == " "){ x += 10; }
}

