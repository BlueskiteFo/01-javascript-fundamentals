console.log("Hola TOP!")

const cuadrado = document.querySelector(".cuadrado");
const para = document.querySelector(".para");

function rectangleSize(width, height) {
  cuadrado.style.width = `${width}px`
  cuadrado.style.height = `${height}px`
  if (width == height) {
    para.textContent = `The square's sides are ${width}px.`;
    return;
  }
  para.textContent = `The rectangle is ${width}px wide and ${height}px high.`
}

var x = 50
var y = 50

x = 43 + 7
y = 25 * 3

x = 150 - 100 / 2
y = 2 * x

rectangleSize(x, y)
