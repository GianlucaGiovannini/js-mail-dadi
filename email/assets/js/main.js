/* Crea una lista con delle e-mail che possono accedere */
const listEnableMail = ["gianluca@gmail.com", "giovannini@gmail.com", "user@gmail.com", "admin@gmail.com", "moderator@gmail.com", "default@gmail.com"];

const elementValidator = document.querySelector("button");

const elementResult = document.querySelector(".result");

elementValidator.addEventListener("click",
    function() {

        let userMail = document.getElementById("email").value;
        let loginEnable = false;

        for (let i = 0; i < listEnableMail.length; i++) {
            let mailControl = listEnableMail[i];

            if (userMail == mailControl) {
                loginEnable = true;
            }
        }

        let stamp;
        let message;

        if (loginEnable == false) {
            stamp = "E-mail sbagliata, riprova ad inserirla"
            message = `<h1 class="display-4 fw-bold color_red">E-mail sbagliata, riprova ad inserirla</h1>`

        } else {
            stamp = "Loggato con successo"
            message = `<h1 class="display-4 fw-bold color_success">Loggato con successo</h1>`
        }

        alert(stamp);
        elementResult.innerHTML = message;

    }
);