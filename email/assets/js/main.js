/* Crea una lista con delle e-mail che possono accedere */
const listEnableMail = ["gianluca@gmail.com", "giovannini@gmail.com", "user@gmail.com", "admin@gmail.com", "moderator@gmail.com", "default@gmail.com"];

let userMail = prompt("Scrivi la tua e-mail per accedere");
let loginEnable = false;
/* se la sua e-mail è nella lista di chi può accedere allora stampa un messaggio appropriato sull'esito del controllo */

for (let i = 0; i < listEnableMail.length; i++) {
    let mailControl = listEnableMail[i];

    if (userMail == mailControl) {
        loginEnable = true;
    }
}

let stamp;

if (loginEnable == false) {
    stamp = "E-mail sbagliata, riprova ad inserirla"
} else {
    stamp = "Loggato con successo"
}

alert(stamp);