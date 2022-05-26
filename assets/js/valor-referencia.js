
let a = 10; 
let b = a; //por referencia

console.log({a,b});

let juan = {nombre: 'juan'};
let ana  = juan;

console.log({juan,ana})

//en js todos los primitivos son pasados por valor y todos los objetos son pasados por referencia 

const cambiaNombre = (persona) => { //pasa por referencia
    persona.nombre = 'Tony';
    return persona;
}



let peter = {nombre:'peter'};
let tony = cambiaNombre(peter); //mandamos el obj a la funcion ya que lo modificamos y si se retorna queda afectado 

console.log({peter,tony});


//---como romper la referncia en la copia de objetos 

//operador spread  ...x (rompe la referencia que existe en JS), aunque tambien es un parametro llamado parametro rest que une los argumentos en una sola variable 

let miguel = {nombre : ' Miguel '};
let anaLisa = {...miguel};
anaLisa.nombre = 'AnaLisa sin referencia';

console.log({miguel,anaLisa});

const cambiaNombreSinRef = ({...persona}) => { //tenemos que volver objeto el parametro para que sea spread y no rest
    persona.nombre = 'Maria sin referencia ';
    return persona;
}

let miguelSin = {nombre: 'Miguelinho'};
let mariaSin  = cambiaNombreSinRef(miguelSin);
console.log({miguelSin,mariaSin});

//ARREGLOS CON REFERENCIA

const frutas = ['Manzana','Pera','Mango'];
const otrasFrutas = frutas;

otrasFrutas.push('Fresa');
console.table({frutas,otrasFrutas});

//al ser un arreglo lo especificamos al asignar un arreglo a una constante con las llaves 

const frutasSin = ['Manzana','Pera','Mango'];
const otrasFrutasSin = [...frutasSin];
otrasFrutasSin.push('Fresa');
console.table({frutasSin,otrasFrutasSin});

//en arreglos podemos romper la referencia con el method .slice() ya que sin argumentos rompe la relacion
//es mas rapido el spread 

//medir rendimiento en diferentes cosas
console.time('medir algo');
//operacion
console.timeEnd('medir algo');

