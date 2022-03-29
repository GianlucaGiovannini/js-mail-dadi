/* Crea una lista con delle e-mail che possono accedere */
const listEnableMail = ["gianluca@gmail.com", "giovannini@gmail.com", "user@gmail.com", "admin@gmail.com", "moderator@gmail.com", "default@gmail.com"]

/* se la sua e-mail è nella lista di chi può accedere allora stampa un messaggio appropriato sull'esito del controllo */

for (let i = 0; i < listEnableMail.length; i++) {
    // chiedo all'utente la sua e-mail
    let userMail = prompt("Scrivi la tua e-mail per accedere")

    let mailControl = listEnableMail[i]

    if (userMail == mailControl) {
        alert("utente abilitato")
    } else {
        alert(`
        Riprova ed utilizza una delle seguenti e-mail: 
        ${listEnableMail[0]} 
        ${listEnableMail[1]} 
        ${listEnableMail[2]} 
        ${listEnableMail[3]} 
        ${listEnableMail[4]} 
        ${listEnableMail[5]} 
        `)
    }
}

const elementNumber = document.querySelector("button");

elementNumber.addEventListener("click",
    function() {
        const numberBot = Math.round(Math.random() * 5 + 1);
        document.querySelector(".bot-number").innerHTML = numberBot

        const numberUser = Math.round(Math.random() * 5 + 1);
        document.querySelector(".user-number").innerHTML = numberUser

        let risultato;

        if (numberBot < numberUser) {
            risultato = "hai vinto"
        } else if (numberBot > numberUser) {
            risultato = "hai perso"
        } else {
            risultato = "hai pareggiato"
        }

        document.querySelector(".risultato").innerHTML = risultato;
    }
)