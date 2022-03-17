let elements = document.getElementsByClassName('title');
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 'Holita';
}

let tag_elements = document.getElementsByTagName('h2');
for (let i = 0; i < tag_elements.length; i++) {
    tag_elements[i].innerHTML = 'Modificado';
    tag_elements[i].style.color = 'red';
}

document.getElementById('saludo').innerHTML = 'Hola Tierra';

document.getElementById('img_modify').src = 'https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg';

document.getElementById('aburrido').innerHTML = "Esta clase esta mela";