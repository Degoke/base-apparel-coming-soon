const email = document.getElementById("email");
const button = document.querySelector(".button");
const errorText = document.querySelector(".error-text");
const error = document.querySelector(".error");

button.onclick = () => {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (regex.test(String(email.value))) {
    error.style.visibility = "hidden";
    errorText.style.visibility = "hidden";
    return;
  } else {
    error.style.visibility = "visible";
    errorText.style.visibility = "visible";
  }
};
