// 列車・乗務員無線の切り替え
function switching() {
    var mode = document.getElementById("mode");
    if (mode.style.opacity == 0.5) {
        mode.style.opacity = 1;
    }
    else {
        mode.style.opacity = 0.5;
    }
}

function func() {
    var channel = document.getElementById("channel");
    channel.innerText = "ー";
}
