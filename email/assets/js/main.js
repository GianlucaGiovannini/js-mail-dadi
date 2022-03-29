/* Crea una lista con delle e-mail che possono accedere */
const listEnableMail = ["gianluca@gmail.com", "giovannini@gmail.com", "user@gmail.com", "admin@gmail.com", "moderator@gmail.com", "default@gmail.com"];

const elementValidator = document.querySelector("button");

const elementResult = document.querySelector(".result");

elementValidator.addEventListener("click",
    function() {

        let userMail = document.getElementById("mail").value;
        let loginEnable = false;

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

        elementResult.classList.remove("d-none")
        elementResult.classList.add("bg_a_caso")
        elementResult.innerHTML = stamp;

    }
);