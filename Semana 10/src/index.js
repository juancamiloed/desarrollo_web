//1er forma
const car1 = {}

//2da forma
const car2 = new Object();

//3ra forma
//const car3 = Object.create();

//Iniciar objeto en una funcion
function carro(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

const miCarro = new carro('Renault', 'Sandero', 'azul')
console.log(`Mi carro es un: ${miCarro.marca} ${miCarro.modelo} de color ${miCarro.color}`)
console.log('------------------------------------')

const vehiculo = {
    tipo: ['Carro', 'Moto', 'Bote'],
    marca: {
        nombre: 'BMW'
    },
    motor: '1200 HP'
}

vehiculo.tipo.forEach(element => {
    console.log(`Es un vehiculo ${element} de marca ${vehiculo.marca.nombre} con ${vehiculo.motor}.`)
});
console.log('------------------------------------')

const car = {
    brand: 'Suzuki',
    model: 'Swift',
    start: function() {
        console.log(`Car started.\nBrand: ${this.brand}\nModel: ${this.model}`)
    } 
}

car.start();