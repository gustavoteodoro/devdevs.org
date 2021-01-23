const contactUsUrl =
  "https://9rzj0u6e53.execute-api.sa-east-1.amazonaws.com/prod/contact";

window.addEventListener("load", () => {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Obrigado por entrar em contato!");

      const name = event.target.elements.name.value;
      const subject = event.target.elements.subject.value;
      const description = event.target.elements.description.value;

      window
        .fetch(contactUsUrl, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({ name, subject, description }),
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(clearFormFields);
    });
});

function clearFormFields() {
  const form = document.getElementById("contact-form");

  Object.values(form.elements).forEach((formElement) => {
    if (!formElement.tagName === "INPUT") return;

    formElement.value = "";
  });
}
