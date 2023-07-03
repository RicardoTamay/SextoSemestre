// Este es un comentario de una sola linea en JS//
/*Este es un comentario multilinea en JS */

/*
var tunombre;
var a;
a= 7;
var b;
b= 7;
console.log(b);
*/

/*
var miPrimerNombre;
var miPrimerNombre ="Ricardo";
var miPrimerApellido="Tamay";
console.log(miPrimerNombre,miPrimerApellido);
*/

/*
var a;
a=5;
var b;
b=10;
var c;
c="Soy un";

a = a + 1;
b = b + 5;
c = c + "String!";
console.log(a,b,c);
*/

/*
//Creación de variables
var VARmAYuScULA;
var varCamelCase;
var OtraCamelCase;

//Asignación Variables
VARMAYUSCULA = 10;
CAmElCase =" A String";
oTRAcAMELcAse= 9000;

//Imprimir contenido variables
console.log(VARmAYuScULA,varCamelCase,OtraCamelCase);
*/

/*
//Creación de variables
var VARmAYuScULA;
var varCamelCase;
var OtraCamelCase;

//Asignación Variables
VARmAYuScULA = 10;
varCamelCase = "A String";
OtraCamelCase= 9000;

//Imprimir contenido variables
console.log(VARmAYuScULA,varCamelCase,OtraCamelCase);
*/

/*
let nombreGato= "Michi";
let sonidogato = "Meow!";
console.log("nombreGato");
console.log("sonidoGato");
*/
/*
const NombreMatria = "Matemáticas";
let cualidadmateria="es impresionante";
cualidadmateria ="es asombroso";

console.log(NombreMatria,cualidadmateria);
*/

/*
const sum = 10 + 10;
console.log(sum);
const rest = 22 - 10;
console.log(rest);
const Multip= 8 * 10;
console.log(Multip);
const div= 4 / 2;
console.log(div);
*/

/*
let miVar = 87;
miVar++;
console.log("El resultado es: ", miVar);
miVar--;
console.log('El resultado es: ', miVar);
*/

/*
let miVar=11;
--miVar;
console.log(miVar);
*/

/*
//Residuo
const residuo = (13 % 3);
console.log(residuo);
*/

/*
// Asignación aumentada
let a = 3;
let b = 17;
let c = 12;

// cambiar código bajo 
a += 12;
b += 17;
c += 7;

//imprimir
console.log(a,b,c);
*/

/*
// Asignación aumentada
let a = 11;
let b = 9;
let c = 3;

// cambiar código bajo 
a -= 6;
b -= 15;
c -= 1;

//imprimir
console.log(a,b,c);
*/

/*
// Asignación aumentada
let a = 5;
let b = 12;
let c = 4.6;

// cambiar código bajo 
a *= 5;
b *= 3;
c *= 10;

//imprimir
console.log(a,b,c);
*/

/*
const ourStr = "Yo vengo primero. " + "Yo vengo segundo.";
*/

/*
const miCadena = "Este es el comienzo" + " " + "Este es el final";
console.log("micadena");
*/

/*
const sandwich =["crema de maní", "mermelada","Pand"];
console.log(sandwich)
*/
/*
const miArray =["Fútbol", 123 ];
console.log(miArray)
*/

/*
const equipos = [["america", 23], ["pumas", 45]];
*/

/*
const equipos = [["america", 23], ["pumas", 45]];
console.log(equipos);
*/


/*
const arreglo = [50, 60, 70];
console.log(arreglo[0]);
const data = arreglo[1];
console.log(data);
*/

/*
const posicion = [1, 2, 3];
posicion.push(4);

const equipoUno = ['Mayra', 'Carlos', 'Maria'];
equipoUno.push(['Alexis', 'Raziel']);
console.log(posicion);
console.log(equipoUno);
*/

/*
const numLista = [1, 4, 6, 5, 7, 3, 8];
const eliminado = numLista.pop();
console.log(eliminado);
console.log(numLista);
*/

/*
function functionName() {
  console.log("Hola Clase 6A");
}
functionName();
functionName();
functionName();
functionName();
*/

/*
function saludo(param1, param2) {
  console.log(param1, param2);
}

saludo('¿Que va a', 'querer?');
saludo("¿Que va a", "llevar?");
*/

/*
function mulTres(num) {
  return num * 3;
}

const productoTres = mulTres(8);

console.log(productoTres);
*/

/*
var globalScope2;
function fun2() {
  globalScope2 = 7;
  console.log(globalScope2);
}
fun2();
*/

/*
function fun3() {
  const local = 'cof cof';
  console.log(local);
}

fun3();
console.log(local);
*/

/*
let pato = {
  nombre: 'Lucas',
  numPatas: 2,
  diNombre: function () { return 'El nombre de este pato es ' + pato.nombre + '.';}
};

console.log(pato.diNombre());
*/

/*
let perro = {
  nombre: "Copito",
  numPatas: 4,
  diPatas: function () {
    return "Este perro tiene " + perro.numPatas + " patas.";
  },
};

console.log(perro.diPatas());
*/

/*s
let pato = {
  nombre: "Lucas",
  numPatas: 2,
  diNombre: function () {
    return "El nombre de este pato es " + this.nombre + ".";
  },
};

console.log(pato.diNombre());
*/

/*
function gato() {
  this.name = 'Fantasmita';
  this.color = 'negro y blanco';
  this.numLegs = 4;
  console.log(this.name);
}

gato();
*/

/*
function perro(nombre, color) {
  this.nombre = nombre;
  this.color = color;
  this.numPatas = 4;

}

let malix = new perro('Solovino', 'sarnosito');
console.log(malix.nombre);
*/
/*
function estudiante(nombre, semestre, carrera) {
    this.nombre = nombre;
    this.semestre = semestre;
    this.carrera = carrera;
  
    console.log(
      "El estudiante " +
        this.nombre +
        " esta cursando el " +
        this.semestre +
        "° semestre de la carrera: " +
        this.carrera
    );
  }
  
  let ingeniero = new estudiante('Ricardo', '6', 'Ingenieria en Sistemas Computacionales') 
  console.log(ingeniero);
  */