const title = document.querySelector("h1");
const ul = document.querySelector("ul");

let evaluatedNumber = 29;

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true
}

function showPrime(number) {
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      console.log(`Se encontró el primo: ${i}`);
      const nuevoLi = document.createElement("li");
      nuevoLi.textContent = `Se encontró el primo: ${i}`;
      ul.appendChild(nuevoLi);
    }
  }
}

title.textContent = `Se buscarán los números primos hasta ${evaluatedNumber}`

showPrime(evaluatedNumber)
