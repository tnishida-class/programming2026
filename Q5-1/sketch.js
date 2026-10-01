// EUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(192);
  noStroke();
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;
    const x = 100 + cos(theta) * 50;
    const y = 100 + sin(theta) * 50;
    ellipse(x, y, 10);
  }
}

// BLANK[1] ヒント：star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう