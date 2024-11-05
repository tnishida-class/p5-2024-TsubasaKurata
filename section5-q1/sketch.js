// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love your grand maother's sister very much.");
  
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 30;
  fill(255);
  ellipse(w/2 + p, h/1.3 + p , w*1.2 , h*2.0 );
  fill(0);
  text(t, p, h + p);
  fill(255);
  triangle(p , p + h*1.3 ,0, 70,50,60)
}
