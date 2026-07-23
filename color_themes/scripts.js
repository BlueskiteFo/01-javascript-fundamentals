const select = document.querySelector("select");
const html = document.querySelector("html");

const psychedelic = `linear-gradient(
    125deg,
    #ff0055, /* Hot Neon Pink */
    #7a00ff, /* Deep Electric Violet */
    #00e5ff, /* Ultra Cyan */
    #00ff66, /* Lime green */
    #ffcc00, /* Vibrant Yellow */
    #ff0055
  )`;

select.addEventListener("change", () => {
  const choice = select.value;

  switch (choice) {
    case "black":
      update("black", "white")
      break
    case "white":
      update("white", "black")
      break
    case "purple":
      update("purple", "white")
      break
    case "yellow":
      update("yellow", "purple")
      break
    case "psychedelic":
      update(psychedelic, "yellow")
      break
  }
});

function update(bgColor, textColor) {
  html.style.background = bgColor;
  html.style.color = textColor;
}
