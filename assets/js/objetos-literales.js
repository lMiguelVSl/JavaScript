
let personaje = {
    nombre: 'Miguel',
    codeName: 'Miguelinho',
    vivo: true,
    edad: 21,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 1','Mark 5','HuklBuster'],
    Direccion: {
        zip: '055422',
        ubicacion: 'Malibu, California'
    }
};
console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Direccion',personaje['Direccion']);
console.log('Edad', personaje['edad']);
console.log('Lat',personaje.coords.lat);
console.log('Nro. trajes',personaje.trajes.length);
console.log('Trajes',personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo',personaje[x]);


//mas detalles
delete personaje.edad; //borrar una propiedad
console.log(personaje);

personaje.casado = false; //agregar propiedad

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//que un objeto sea constante no deja cambiarle el valor al objeto mas si deja agregar o eliminar props

Object.freeze(personaje); //no se permite modificar los atributos del objeto ni los valores
//pero no congela las propiedades que son objetos dentro del objeto 

personaje.dinero = 500;
console.log(personaje) //ya no aparece la propiedad dinero

const props = Object.getOwnPropertyNames(personaje); //arreglo con los nombres de las props
const values = Object.values(personaje); //valores de las propiedades en array
console.log(props);
console.log(values);

//------------buscar propiedades de objetos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object 