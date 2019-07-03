var addBtn = document.querySelector('#btn');

function getRndColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;
}
addBtn.onclick = function setRndColor() {
    $("#btn").css("background-color", getRndColor());
}