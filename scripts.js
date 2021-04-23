

const flipColor = document.querySelector(".flip-color");
const currentColor = document.querySelector(".current-color");
const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]; // button

function generateRandomHexDigit() {
  const randomDigit = Math.floor(Math.random() * hexDigits.length);
  return hexDigits[randomDigit];
}
// // to generate random numbers in javascript, use Math.random
// // math.floor takes in an expression as a parameter.
flipColor.addEventListener("click", function () {
  console.log("clicked on the button");
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += generateRandomHexDigit();
  }

  document.body.style.backgroundColor = newColor;
  currentColor.textContent = newColor;
});

