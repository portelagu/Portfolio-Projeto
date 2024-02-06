const form = document.querySelector("form");
const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(e) {
    e.preventDefault();

    const bodyMessage = `nome: ${name.value}<br> número: ${number.value}<br> email: ${email.value}<br> mensagem: ${message.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "projetoportifolioalura@gmail.com",
        Password : "A7D35CEC11B09ECA271A5084693AE94CFF88",
        To : 'projetoportifolioalura@gmail.com',
        From : "projetoportifolioalura@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire("Sua mensagem foi enviada!");
        }
      }
    );
}

form.addEventListener("submit", sendEmail);