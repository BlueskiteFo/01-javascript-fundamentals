console.log("Hello World!");

console.log((4 + 6 + 9) / 77)

const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage)

function updateName() {
  const name = prompt("Ingresa tu nombre: ")
  button.textContent = `PLAYER 1: ${name}`
}

const button = document.querySelector("button");

button.addEventListener("click", updateName);
