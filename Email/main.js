//definiamo array con possibili accessi
const iscritti = ['massimilianogasaro@gmail.com','mariorossi@gmail.com','pincopallino@gmail.com']

//chiediamo all'utente la mail
let email = prompt('Qual è il tuo indirizzo mail?');

//definiamo una variabile booleana su false
let flag = false;

//condizione per verificare accesso
for (let i=0; i < iscritti.length; i++) {
 
    if (email == iscritti[i]) {
        alert('Puoi accedere al documento!!')
    } 
    
}

/*if(flag == true){
    alert('Presente');
}
else{
    alert('Assente');
}*/
    