
let a = 5;

if (a < 10) {
    console.log('A es menor que 10');
}

//condicionales  >= ; <= ; || ; != ; == ; 

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});


//no usar solo un = ya que en JS es una asignacion
// 5 === '5' => no es cierto ya que no es exactamente lo mismo un number a un string 
if (dia === 0 ) {
    console.log('Domingo')
} else {
    if (dia === 1) {
        console.log('Lunes')
    }
    console.log('No es domingo ni lunes ');
}

//else if
if (dia === 0) {
    console.log('Domingo else if')
} else if(dia === 1){
    console.log('Lunes else if')
} else if (dia === 2) {
    console.log('Martes else if')
} else {
    console.log('ni Domingo ni lunes ni martes...')
}