const input = document.querySelector("input");
const para = document.querySelector("p");

function writePara(event) {
  if (event.key == 'Enter') {
    const text = input.value;
    para.textContent = text
    input.value = ''
  }
}

input.addEventListener("keydown", writePara)
