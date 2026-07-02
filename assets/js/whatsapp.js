/* =====================================================
   WHATSAPP
===================================================== */

const form = document.querySelector(".contact__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.querySelector('input[type="text"]').value;

  const email = form.querySelector('input[type="email"]').value;

  const phone = form.querySelector('input[type="tel"]').value;

  const message = form.querySelector("textarea").value;

  const text = `Olá!

Meu nome é ${name}

E-mail: ${email}

Telefone: ${phone}

Projeto:

${message}`;

  window.open(
    `https://wa.me/5554999999999?text=${encodeURIComponent(text)}`,

    "_blank",
  );
});
