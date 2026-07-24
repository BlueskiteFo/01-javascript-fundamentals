const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("keydown", event => {
  event.preventDefault();
  para.textContent = `You've pressed the ${event.key} key`;
  input.value = event.key;
})
