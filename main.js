const container = document.querySelector(".container");
const numOfSquares = 16 * 16;
for (let index = 0; index < numOfSquares; index++) {
  const square = document.createElement("div");
  container.appendChild(square);
}
