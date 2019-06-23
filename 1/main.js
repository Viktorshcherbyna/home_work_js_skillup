var user = ['vasya', 'petya', 'anya', 'vera', 'alex'];
var animal = ['lev', 'kot', 'loshad', 'los', 'skyns'];
var drinks = ['tea', 'coffee', 'mohito', 'sprite'];

function renderListUser(first, list) {
    var block = document.querySelector('#list');
    var html = '';

    for (var names of user) {
        html += `<li onclick = alert(this.innerHTML)>${names}</li>`;
    }
    block.innerHTML = html;
}

function renderListAnimal(second, anim) {
    var block = document.querySelector('#anim');
    var html = '';

    for (var animals of animal) {
        html += `<li onclick = alert(this.innerHTML)>${animals}</li>`;
    }
    block.innerHTML = html;
}

function renderListDrink(third, cold) {
    var block = document.querySelector('#cold');
    var html = '';

    for (var drunk of drinks) {
        html += `<li onclick = alert(this.innerHTML)>${drunk}</li>`;
    }
    block.innerHTML = html;

}


renderListUser('first, #list');
renderListAnimal('second, #anim');
renderListDrink('third, #cold');