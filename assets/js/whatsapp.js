/* =====================================================
   WHATSAPP
===================================================== */

function initWhatsapp() {
  const form = document.querySelector(".contact__form");

  if (!form) return;

  const whatsappNumber = "5554996540938";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();

      return;
    }

    const data = new FormData(form);

    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const phone = data.get("phone").trim();
    const message = data.get("message").trim();

    const whatsappMessage = `Olá!

Meu nome é ${name}

E-mail: ${email}

Telefone: ${phone || "Não informado"}

Gostaria de solicitar um orçamento.

Detalhes do projeto:

${message}`;

    const url =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(url, "_blank", "noopener,noreferrer");

    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", initWhatsapp);
