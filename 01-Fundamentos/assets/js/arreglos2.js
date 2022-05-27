//--propiedades y metodos de los arreglos
let juegos = ['Zelda','Mario','Metroid','LOL'];
console.log('Length', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]; //ultimo valor
console.log({primero,ultimo});

juegos.forEach((elemento,indice,arr) => {
    console.log({elemento,indice,arr})
});

let nuevaLongitud = juegos.push('F-0'); //insert at the end
console.log(nuevaLongitud,juegos);

nuevaLongitud = juegos.unshift('Fire Emblem'); //insert at the start
console.log(nuevaLongitud,juegos);

let juegoBorrado = juegos.pop(); //delete the last item and return it 
console.log({juegoBorrado,juegos});

let pos = 1; //delete in a exactly position with indice
let juegosBorrados = juegos.splice(pos,2);
console.log(juegosBorrados,juegos);

let juegoIndex = juegos.indexOf('Metroid'); //position of some item with its name, caseSensitive
console.log({juegoIndex}); // -1 means the game wasn't found

