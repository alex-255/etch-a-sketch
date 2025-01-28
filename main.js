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
    square.addEventListener("mouseenter", (event) => {
      square.style.backgroundColor = "lightblue";
    });
  });
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
