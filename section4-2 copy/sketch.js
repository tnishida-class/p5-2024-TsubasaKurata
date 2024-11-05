//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls; //新しい変数”balls”を宣言する

//最初に一回だけ実行する
function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];//変数”balls”を用いて配列を作成する
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){//配列の長さの分だけiを増加させ続ける
    let b = balls[i];//新しい変数”ｂ”を宣言し、配列”balls”のi番目を代入する
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
