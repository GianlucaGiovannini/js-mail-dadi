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
);