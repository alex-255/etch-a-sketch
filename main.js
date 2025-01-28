const container = document.querySelector(".container");
let numOfSquaresPerSide = 16;

const printSquares = (perSide) => {
  container.textContent = "";
  let numOfSquares = perSide ** 2;
  for (let index = 0; index < numOfSquares; index++) {
    const square = document.createElement("div");
    square.style.width = 960 / perSide + "px";
    square.style.height = 960 / perSide + "px";
    container.appendChild(square);
  }

  const squares = document.querySelectorAll(".container > div");
  squares.forEach((square) => {
    let opacity = 0;
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = colorRandomizer();
      opacity = opacity < 1 ? opacity + 0.1 : 1;
      square.style.opacity = opacity;
    });
  });
};

const colorRandomizer = () => {
  const randR = Math.floor(Math.random() * 256);
  const randG = Math.floor(Math.random() * 256);
  const randB = Math.floor(Math.random() * 256);
  const RGB = "rgb(" + randR + ", " + randG + ", " + randB + ")";
  return RGB;
};

printSquares(numOfSquaresPerSide);

const buttonAlert = document.querySelector(".button-alert");
buttonAlert.textContent = "Press to change amount of squares";
buttonAlert.addEventListener("click", () => {
  do {
    numOfSquaresPerSide = prompt("Enter amount of squares per side:");
  } while (numOfSquaresPerSide > 100);
  printSquares(numOfSquaresPerSide);
});
