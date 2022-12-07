const form = document.querySelector("form.login-form");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert(
      `Усі поля форми мають бути заповнені. Введіть, будь ласка, електронну адресу та пароль!`
    );
    return;
  }
  console.log({ email: email.value, password: password.value });
  evt.currentTarget.reset();
}

// const form = document.querySelector("form.login-form");

// form.addEventListener("submit", onFormSubmit);
// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const { email, password } = evt.currentTarget.elements;
//   if (email.value === "" || password.value === "") {
//     alert(
//       `Усі поля форми мають бути заповнені. Введіть, будь ласка, електронну адресу та пароль!`
//     );
//   }
//   console.log(`Email: ${email.value}, Password: ${password.value}`);
//   evt.currentTarget.reset();
//   return;
// }

// function reset() {
//   form.innerHTML = "";
// }
