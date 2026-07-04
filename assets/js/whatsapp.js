/* =====================================================
   WHATSAPP
===================================================== */

function initWhatsapp() {
  const form = document.querySelector(".contact__form");

  if (!form) return;

  const whatsappNumber = "5554996540938";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const phone = form.elements.phone.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      alert("Por favor, preencha os campos obrigatórios.");

      return;
    }

    const text = `Olá!

Meu nome é ${name}

E-mail: ${email}

Telefone: ${phone || "Não informado"}

Gostaria de solicitar um orçamento.

Detalhes do projeto:

${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );

    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", initWhatsapp);
