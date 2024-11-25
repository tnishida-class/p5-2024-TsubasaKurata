// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // 平均値を求める
  let average = sum / scores.length;
    console.log(average); 

  //最大値を求める
  let largest = 0;
    for(let i = 0; i < scores.length; i++){
      if (largest < scores[i]) {
        largest = scores[i];
      }
    }
    console.log(largest); 

  //最小値を求める
  let smallest = 100; 
    for(let i = 0; i < scores.length; i++){
      if (scores[i] < smallest) {
        smallest = scores[i];
      }
    }
    console.log(smallest);
 
  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    // 条件分岐を使って色を変更
    if (scores[i] === largest) {
      fill(255, 0, 0);
    } else if (scores[i] === smallest) {
      fill(0, 0, 255);
    } else {
      fill(122);
    }

    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }

  // 平均点の線を引く
  stroke(0, 255, 0);
  const ah = height * average/100
  line(0, height -  ah, width, height-ah);
}
