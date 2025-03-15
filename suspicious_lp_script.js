document.addEventListener("DOMContentLoaded", function() {
    // タイトルが点滅
    let title = document.querySelector("h1");
    setInterval(() => {
        title.style.color = title.style.color === "#ff0" ? "#ff0000" : "#ff0";
    }, 500);

    // ページ全体がゆっくりと左右に揺れる
    let angle = 0;
    setInterval(() => {
        angle += 2;
        document.body.style.transform = `rotate(${Math.sin(angle * Math.PI / 180) * 2}deg)`;
    }, 50);

    // 背景が怪しげに変化
    let colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#ffff00", "#00ffff"];
    let colorIndex = 0;
    setInterval(() => {
        document.body.style.background = `linear-gradient(to bottom, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);

    // ボタンをクリックすると怪しげなエフェクト
    let button = document.querySelector("button");
    button.addEventListener("click", function() {
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.color = "#ff0";
        overlay.style.fontSize = "2em";
        overlay.style.textAlign = "center";
        overlay.innerHTML = "🚨 選ばれし者よ… 参加の覚悟はあるか！？ 🚨";
        document.body.appendChild(overlay);
        setTimeout(() => { document.body.removeChild(overlay); }, 3000);
    });
});
