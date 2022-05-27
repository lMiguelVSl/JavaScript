
//---PRIMITIVOS

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tia May";
nombre = `Tia May`; //son strings iguales pero se aconseja usar comilla sencilla 

//para saber que tipo de dato apunta la variable
console.log( typeof nombre);

//BOOLEANOS

let esMarvel = true;
console.log(esMarvel);
console.log( typeof esMarvel);

//NUMBER
let edad = 33;


let superPoder ;
console.log( typeof superPoder); //undefined cuando no se ha inicializado la variable 

let soyNull = null;
console.log( typeof soyNull); //JS interpreta los null como un objeto aunque se puede tratar como tipo primitivo 

//----SYMBOL
//permiten crear identificadores unicos a JS
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(symbol1 === symbol2); //if they are exactly the same thing
