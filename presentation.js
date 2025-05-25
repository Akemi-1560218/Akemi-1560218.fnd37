// 車両価格
const carData = {
  アルファード: 510,
  シエンタ: 200,
  カローラ: 230,
  クラウン: 730,
  プリウス: 280,
  bZ4X: 550,
  RAV4: 330,
  アクア: 220
};

// 検索ボタンのクリックイベントを設定
document.getElementById("searchButton").addEventListener("click", function() {
  // 入力された車両を取得
  const selectionString = document.getElementById("selectionString").value;

  // 結果を表示するエレメント
  const output = document.getElementById("output");

  const fare = carData[selectionString];
  output.textContent = `車両参考価格は ${fare} 万円`;

});
