
function saludar (){
    console.log('Hola');
    return 'miguel';
    console.log('no se ejecuta porque estoy despues de un return');
};


//funcion anonima
const saludar2 = function(){ //function como variable 
    console.log('soy una function anonima');
}

const saludarFlecha = () => { //arrow normal
    console.log('Function flecha');
};

const saludarFlecha2 = (nombre) => { //arrow con atributo
    console.log('buenas', nombre);
}
saludarFlecha2('miguel');

const sumar = (a,b) => {
    return a+b;
}
//mejor forma

const smar = (a,b) => a+b; //arrow con una linea
const GetAleatorio = () => Math.random();

console.log(sumar(1,2));
console.log(GetAleatorio());