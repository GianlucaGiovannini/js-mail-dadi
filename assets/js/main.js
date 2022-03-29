/* Crea una lista con delle e-mail che possono accedere */
const listEnableMail = ["gianluca@gmail.com", "giovannini@gmail.com", "user@gmail.com", "admin@gmail.com", "moderator@gmail.com", "default@gmail.com"]

let userMail = prompt("Scrivi la tua e-mail per accedere");
let loginEnable = false;
/* se la sua e-mail è nella lista di chi può accedere allora stampa un messaggio appropriato sull'esito del controllo */

for (let i = 0; i <= listEnableMail.length; i++) {
    let mailControl = listEnableMail;

    if (userMail == mailControl) {
        loginEnable = true;

    } else {
        loginEnable = false;
    }
}

let stamp;
if (loginEnable == false) {
    stamp = "E-mail sbagliata, riprova ad inserirla"

} else {
    stamp = "Loggato con successo"
}

alert(stamp);








/* 
// aggancia un bottono e mettilo in ascolto per il click
const elementNumber = document.querySelector("button");

elementNumber.addEventListener("click",
    function() {
        // assegna i numeri ai giocatori
        const numberBot = Math.round(Math.random() * 5 + 1);
        document.querySelector(".bot-number").innerHTML = numberBot;

        const numberUser = Math.round(Math.random() * 5 + 1);
        document.querySelector(".user-number").innerHTML = numberUser;
        // crea una variante da stampare e digli cosa ci deve essere scritto in base al risultato
        let risultato;

        if (numberBot < numberUser) {
            risultato = "hai vinto";
        } else if (numberBot > numberUser) {
            risultato = "hai perso";
        } else {
            risultato = "hai pareggiato";
        }
        // stampa il risultato
        document.querySelector(".risultato").innerHTML = risultato;
    }
); */