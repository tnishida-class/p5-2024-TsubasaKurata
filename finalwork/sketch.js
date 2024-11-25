// 最終課題を制作しよう

let leaves = []; // 葉っぱの配列
let colors = ["#FF4500", "#FFA500", "#FFD700", "#B8860B"]; // 色の候補

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  initLeaves(100); // 初期状態で100枚の葉を生成
}

function draw() {
  background(253, 183, 131); // 背景色（秋の淡い色）
  
  // 葉っぱを更新・描画
  for (let leaf of leaves) {
    leaf.update();
    leaf.display();
  }
}

// 葉っぱを初期化する関数
function initLeaves(count) {
  for (let i = 0; i < count; i++) {
    leaves.push(new Leaf());
  }
}

// 葉っぱクラス
class Leaf {
  constructor() {
    this.reset();
  }

  // 葉っぱの初期化
  reset() {
    this.x = random(width);
    this.y = random(-height, 0); // 画面上部からスタート
    this.size = random(20, 60); // サイズ
    this.color = random(colors); // 色
    this.speed = random(1, 3); // 落下速度
    this.swing = random(20, 50); // 横揺れ幅
    this.angle = random(TWO_PI); // 初期角度
  }

  // 更新処理
  update() {
    this.y += this.speed; // 落下
    this.angle += 0.02; // 揺れを増加
    this.x += sin(this.angle) * 2; // 横揺れ

    // 画面外に出たらリセット
    if (this.y > height) {
      this.reset();
    }
  }

  // 描画処理
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size / 1.5); // 楕円形の葉
  }
}

// マウス操作：クリックで葉っぱの色を変更
function mousePressed() {
  colors = ["#D62113", "#FF5722", "#FAC629"]; // 新しい色
  for (let leaf of leaves) {
    leaf.color = random(colors); // 色を再割り当て
  }
}

// ウィンドウサイズ変更時の処理
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
