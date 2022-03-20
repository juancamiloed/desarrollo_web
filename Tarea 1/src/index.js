function random_color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let color_one = random_color();
document.getElementById('column-one').style.backgroundColor = color_one;
document.getElementById('color-one').innerHTML = `HEX: ${color_one}`;

let color_two = random_color();
document.getElementById('column-two').style.backgroundColor = color_two;
document.getElementById('color-two').innerHTML = `HEX: ${color_two}`;

let color_three = random_color();
document.getElementById('column-three').style.backgroundColor = color_three;
document.getElementById('color-three').innerHTML = `HEX: ${color_three}`;

let color_four = random_color();
document.getElementById('column-four').style.backgroundColor = color_four;
document.getElementById('color-four').innerHTML = `HEX: ${color_four}`;

function change_color(idColumn, idColor) {
    let color = random_color();
    document.getElementById(idColumn).style.backgroundColor = color;
    document.getElementById(idColor).innerHTML = `HEX: ${color}`;
}