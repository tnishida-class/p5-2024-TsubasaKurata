// 小手調べ
function setup() {
  createCanvas(120, 120);//キャンパスを作成する
  background(255);//キャンバスの色を白にする
  noFill();//円の中を埋めない設定にする
  for(let i = 0; i < 10; i++){//iを10回繰り返す
    let d = (i + 1) * 10;//ｄを（i+1）×10 にする
    if (i < 5) {
      stroke(0, 0, 255);//内側５つの円をの色を青にする
    } else {
      stroke(255, 0, 0);//内側５つの円をの色を赤にする
    }
    ellipse(width/2, height/2, d, d);
    //キャンバスの高さの二等分線と幅の二等分線の交点を中心とする高さと幅がｄの円を描画する
  }
}