// EU国旗
function setup() {
  const blue = color(0, 51, 153);
  const gold = color(255, 204, 0);
  createCanvas(270, 180);
  // noStroke();
  background(0,51,153);

// キャンバスの中心を (middle_x, middle_y)と定義
  const middle_x = width / 2; 
  const middle_y = height / 2;
  
//12回座標を指定する
  for(let i = 0; i < 12; i++){
    let star_x = Math.cos(Math.PI/6 * i) * 60 + middle_x;
    let star_y = Math.sin(Math.PI/6 * i) * 60 + middle_y;
    fill( gold );
    ellipse( star_x , star_y ,17,17);
 }
  
}
