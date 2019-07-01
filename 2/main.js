var i = [];

function pushData() {
    // get value from the input text
    var inputText = document.getElementById('input_text').value;

    // append data to the array
    i.push(inputText);


    for (var x of i) {}
    // display array data
    document.querySelector('#list').innerHTML += "<pre>" + x + "\n" + "</pre>";

}

function clearBox(names) {
    document.querySelector('#list').innerHTML = names = [];
}

function clearInput() {
    document.querySelector('#input_text').value = '';
}

(function eventEnter() {
    document.querySelector('#input_text').addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            pushData();
            clearInput();
        }
    });
})();