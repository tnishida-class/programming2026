// 配列の平均・最大・最小を求め、棒グラフを描く
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  const scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  }

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    // BLANK[3]　ヒント：最小値とだいたい同じ
  }

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    // BLANK[4] 最大値・最小値の色を変えましょう
    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
  }

  // BLANK[5] 平均点の線を引きます
}