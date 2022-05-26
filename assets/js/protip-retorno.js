

function crearPersona(nombre,apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

//protip
function crearPersonaPro(nombre,apellido){
    return {
        nombre,
        apellido
    }
}

const crearPersonaArrow = (nombre,apellido) => ({nombre,apellido}); //retornar como objeto

const persona = crearPersona('Miguel','Vargas');
console.log(persona)

function imprimeArgumentos (){
    console.log(arguments);
}


//parametro rest '...'n no puede venir otro argumento despues del rest 
const argumentos2 = (edad, ...arguments) => { //arrow no tiene el objeto arguments, hay que escribirlos
    /* console.log(arguments); */
    return arguments;
}

imprimeArgumentos(10,true,false,'hola','Miguel');
let argumentos = argumentos2(12,1000,true,false);

const [casado,vivo] = argumentos2(21,true,true);
console.log({casado,vivo}); //con pares de valores {}

const {apellido} = crearPersona('Miguel','Vargas');
const {apellido: nuevoApellido} = crearPersona('Miguel','Vargas');
console.log({apellido});
console.log('nuevo nombre de variable:', {nuevoApellido});


//destructuracion 
const tony = {
    nombre: 'miguel',
    codeName: 'Vargas',
    vida: true,
    edad: 21
}

const imprimePropiedades = ({nombre,codeName,vida,edad = 15}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vida});
    console.log({edad});
}
imprimePropiedades(tony);