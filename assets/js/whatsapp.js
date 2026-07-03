/* =====================================================
   WHATSAPP
===================================================== */

const form = document.querySelector(".contact__form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const whatsappNumber = "5554999999999";

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Por favor, preencha os campos obrigatórios.");

      return;
    }

    const text = `Olá!

Meu nome é ${name}

E-mail: ${email}

Telefone: ${phone || "Não informado"}

Projeto:

${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    form.reset();
  });
}
