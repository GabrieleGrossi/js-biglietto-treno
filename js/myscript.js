console.log('Ciao user, benvenuto nel nostro sito di viaggi')

// 1 Chiedere all'utente quanti chilometri vuole fare
// 2 Chiedere l'età del passegggero
// 3 In base all'età del passeggero, applicare uno sconto sul prezzo del biglietto
    // 3-A se 18 < allora 20%
    // 3-B se 65 > allora 40%

// 4 Tenere in considerazione che il biglietto costa 0.21€ al chilometro

// 1
const chilometri = parseInt (prompt('Inserire i chilometri da percorrere'));
console.log(chilometri);

// 2
const userAge = parseInt (prompt('Inserire quanti hanni ha il passeggero'));
console.log(userAge);

// Prezzo del biglietto per chilometro
const ticketPrice = 0.21;

// 3
const totalPrice = chilometri * ticketPrice + '€';
console.log(totalPrice)

let discount;

if (userAge < 18){
    console.log('Essendo ancora minorenne, hai diritto ad uno sconto del 20% usl prezzo del biglietto')
    discount = totalPrice - (totalPrice * 0.2);
} else if (userAge > 65){
    console.log('Essendo over 65, hai diritto ad uno sconto del 40% sul prezzo del biglietto')
    discount = totalPrice - (totalPrice * 0.4);
} else {

}