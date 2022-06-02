

/* 2C = two fo clubs */
/* 2D = Two of diaminds */
/* 2H = Two of heart */
/* 2S = Two of spades */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//crear barajas
const crearDeck = () => {

        for (let index = 2; index <= 10; index++) {
            for(let tipo of tipos){
                deck.push(index+tipo);
            }
        }

        for (let tipo of tipos) {
            for(let esp of especiales){
                deck.push(esp+tipo);
            } 
        }

        //console.log( deck );
        deck = _.shuffle( deck ); //organizo al azar todo el array que tengo
       // console.log(deck);
        return deck;
}

crearDeck();
    
//funcion give me a card
const pedirCarta = () => {
    
    if (deck.length === 0) {
        throw 'No hay mas cartas';
    } 
    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta; //retorno la carta eliminada 
}

//pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length-1); //solo leo los valores necesarios en este caso 
    return (isNaN(valor))?
              valor==='A'? 11:10 
            : valor*1

}

const valor = valorCarta( pedirCarta() );
console.log({valor});