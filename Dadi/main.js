//definisco numero casuale per giocatore
let numeroGiocatore = Math.floor(Math.random() * 6);
//console.log(numeroGiocatore)

//definisco numero casuale per computer
let numeroComputer = Math.floor(Math.random() * 6);

//definisco variabile richiamando elemento nel DOM
let vincitore = document.getElementById('winner');

//condizioni per stabilire vincitore
if (numeroGiocatore > numeroComputer) {
    vincitore.innerHTML = 'Il vincitore è il player!';
} else if (numeroGiocatore < numeroComputer) {
    vincitore.innerHTML = 'Il vincitore è il computer!';
} else {
    vincitore.innerHTML = 'Il risultato è pari!'
}