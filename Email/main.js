//definiamo array con possibili accessi
const iscritti = ['massimilianogasaro@gmail.com','mariorossi@gmail.com','pincopallino@gmail.com']

//chiediamo all'utente la mail
let email = prompt('Qual è il tuo indirizzo mail?');

//condizione per verificare accesso
if (email == iscritti[0] || email == iscritti[1] || email == iscritti[2]) {
    alert('Puoi accedere al documento!!')
} else {
    alert('Non puoi accedere al documento!!')
}