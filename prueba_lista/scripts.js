const selector = document.querySelector("#weather");
const foto = document.querySelector("img");
const texto = document.querySelector("p");

function setWeather() {
  const clima = selector.value;

  switch (clima) {
    case "soleado":
      texto.textContent = 'El dia está solea a a a ao';
      foto.src = "img/sol.png";
      foto.alt = "Día Soleado"
      foto.style.display = "block"
      break
    case "nublado":
      texto.textContent = 'Ta nublau'
      foto.src = "img/nubes.jpg";
      foto.alt = "Día Nublado"
      foto.style.display = "block"
      break
    case "seminublado":
      texto.textContent = 'Termino medio como para caminar'
      foto.src = "img/seminublado.jpg";
      foto.alt = "Día Parcialmente Nublado"
      foto.style.display = "block"
      break
    case "lluvioso":
      texto.textContent = 'Traigan paraguas!!'
      foto.src = "img/lluvia.jpg";
      foto.alt = "Día Lluvioso"
      foto.style.display = "block"
      break
    default:
      texto.textContent = 'Asegurate de seleccionar una opción!'
      foto.style.display = "none"
  }
}

selector.addEventListener("change", setWeather)
