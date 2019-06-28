document.querySelector('#c').style.width = "300px";
document.querySelector('#c').style.height = "300px";
document.querySelector('#c').style.border = "2px solid black";


var currentColor = 0;
var colors = ['red', 'blue', 'green', 'black', 'yellow', 'darkgrey', 'maroon', 'orange'];

function colPrev() {
    currentColor--;
    if (currentColor < 0) currentColor = 7;
    var a = document.getElementById("c");
    a.style.backgroundColor = colors[currentColor];
}

var currentColor2 = 0;

var currentColor2 = 0;


function colNext() {
    currentColor++;
    if (currentColor > 7) currentColor = 0;
    var a = document.getElementById("c");
    a.style.backgroundColor = colors[currentColor];
}