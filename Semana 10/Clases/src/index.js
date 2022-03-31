if (typeof(Storage) !== 'undefined') {
    // Código cuando Storage es compatible
    console.log('Storage');
  } else {
   // Código cuando Storage NO es compatible
   console.log('No storage');
  }

//Clases
class Persona {
    nombre
}

const juan = new Persona();
juan.nombre = 'Juan Camilo';

console.log(juan.nombre);

class Person {
    saludar() {
        console.log('Hola');
    }
}

const maria = new Person();
maria.saludar();

class Persona2 {
    constructor(nombre, edad, estatura){
        this.nombre = nombre;
        this.edad = edad;
        this.estatura = estatura;
    }
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y mido ${this.estatura} cm.`)
    }
}

const camilo = new Persona2('Juan Camilo', 21, 180);
camilo.saludo();

class Animal {
    constructor(especie, edad){
        this.especie =  especie;
        this.edad = edad;
    }
}

const perro = new Animal('perro', 2)

class Pet extends Animal {
    constructor(especie, edad, nombre, raza) {
        super(especie, edad);
        this.nombre = nombre;
        this.raza = raza;
    }
    resume(){
        console.log(`Soy un ${this.especie} de ${this.edad} años, me llamo ${this.nombre} y soy un ${this.raza}`);
    }
}

const bruno = new Pet(perro.especie, perro.edad, 'Bruno', 'Labrador');
bruno.resume();