const anchors = Array.from(document.getElementsByTagName("a"));
const contactInfo = document.querySelector(".contact-info");
const form = document.querySelector("form");
const emailField = document.querySelector("input[type='email']");
const message = document.getElementById("message");

anchors.forEach((anchor) => {
   if (!contactInfo.contains(anchor)) {
      anchor.addEventListener("click", (event) => event.preventDefault());
   }
});

const validateEmailAddress = (event) => {
   event.preventDefault();

   const fieldIsEmpty = !emailField.value.trim();
   const emailIsInvalid = !emailField.checkValidity();

   if (fieldIsEmpty) {
      displayMessage("No email address provided", "red");
   } else if (emailIsInvalid) {
      displayMessage(`Invalid input: ${emailField.validationMessage}`, "red");
   } else {
      displayMessage(
         "If this were a real website, you'd receive an email",
         "green"
      );
   }
};

const displayMessage = (text, color) => {
   message.innerText = text;
   message.className = color;
};

form.addEventListener("submit", validateEmailAddress);
