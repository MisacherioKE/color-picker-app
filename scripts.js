// // alert('hello world')
// // alert is a function given to us by javascript.
// // the console is part of the deveoloper tools. its a way to communicate with your programs
// // a variable is a container for a value
// // const firstName = "sarah"
// // to invoke a variable
// // console.log("my name is", firstName)
// // refer to a variable by its name, assign it a value.
// // variable rules:
// // The first character must be a letter or an underscroe(_). You cat use a number as the first character.
// // The rest of the variable name can include any letter, any number, or the underscore. You can't use any other characters, including spaces, symbols, and punctuation marks.
// // No limits to a variable name's length. Plus, variables in javascript are case sensitive
// // You can't use one of javascripts' reserved words as variables
// // Primitive types: strings, number, bigInt, boolean, undefined, null, symbol
// // variables in javascript do not have a type.
// // const average = (1 + 2 + 3) /3
// // console.log('average is ', average)

// // alert('lesson n 1')

// // making pasta

// // const hasSpaghetti = false
// // if (hasSpaghetti){
// //     console.log('you can make pasta')
// // }

// // const myAge = 22
// // if (myAge < 22){
// //     console.log('you are underage!')
// // }

// // an expression is anything that produces a value

// // const myNumber = 10

// // if (myNumber % 2 ===0){
// //     console.log(myNumber, ' is even!')
// // }

// // const myCondition = false
// // const test = Number('not a number')
// // console.log(test)

// // const condition = 10 < 2

// // if (condition){
// //     console.log('That is true')
// // }
// // else{
// //     console.log('This is false!')
// // }

// // const condition = 10 == '10'
// // const condition2 = 10 === 10

// // if (condition){
// //     console.log('condition is true')
// // }
// // if (condition2){
// //     console.log('condition is true')
// // }

// // const myNumber = prompt('Enter a number')

// // if (myNumber % 2 ===0){
// //     console.log('Your number is even')
// // }else{
// //     console.log('Your number is odd')
// // }
// //  const timeOfTheDay = prompt('Enter time of the day')

// //  if (timeOfTheDay > 20){
// //      console.log('Good evening')
// //  }else if (timeOfTheDay > 14){
// //      console.log('Good afternoon')
// //  }else{
// //      console.log('Good morning')
// //  }
// // const myNumber = prompt('what is your number?')
// // const result = myNumber % 2 === 0 ? 'even' : 'odd'
// // console.log('result is', result)
// // javascript interview question

// // check if a number is even or odd - loop
// // all the numbers from 1 to 9
// // for (let number = 1; number < 10; ++number)
// // for (let number = 1; number < 10; number += 2){
// //     if (number % 2 === 0){
// //         console.log(number, 'is even')
// //     }else{
// //         console.log(number, 'is odd')
// //     }
// // }

// // temperature to celsius

// // for (let temperature = 50; temperature < 100; ++temperature){
// //     const toCelsius = ((temperature - 32) * 5) / 9
// //     console.log('temperature to celsius is', toCelsius)
// // }

// // const dayOfTheWeek = prompt('what day is today?')
// // if (dayOfTheWeek ==='monday'){
// //     console.log('im going to rest')
// // }else if (dayOfTheWeek ==='wednesday'){
// //     console.log('lesson with pierro')
// // }else if (dayOfTheWeek ==='saturday'){
// //     console.log('its movie night')
// // }else{
// //     console.log('i have no idea what to do')
// // }

// // switch (dayOfTheWeek){
// //     case 'monday':
// //         console.log('im going to rest')
// //         break
// //     case 'wednesday':
// //         console.log('lesson with Piero')
// //         break
// //     case 'saturday':
// //         console.log('its movie night')
// //         break
// //     default:
// //         console.log('i have no idea what to do')
// // }

// // functions and arrays

// // function printName(){
// //     console.log('your name is Sarah')
// //     console.log('your name is Kene')
// // }

// // printName()

// // function printName(name, age){
// //     console.log('your name is', name, 'and your age is', age)
// // }

// // printName('Sarah', 27)
// // printName('Kene')
// // printName('Sewanu')
// // printName('Sophie')

// // const sum = function (num1, num2){
// //     console.log('the sun is', num1 + num2)
// //     return num1 + num2
// // }

// // sum(10, 10)

// // const mySum = sum(10, 10)
// // console.log('your sum is', mySum)

// // writing functions using ECMA Script
// // const sum = (num1, num2)=> {
// //     return num1 + num2
// // }

// // console.log(sum(2, 2))

// // to store values in an array
// // const temperatures = [50, 51, 52, 53, 54, 55]
// // console.log(temperatures [2])
// // const toCelsius = (temperature)=> (5/9) * (temperature - 32)
// // to print individual values

// // for(let i = 0; i < temperatures.length; ++i){
// //     console.log(
// //         temperatures[i],
// //         'temperature to celsius is ',
// //         toCelsius(temperatures[1])
// //     )

// // }

// // push concepts
// // temperatures.push(56)
// // console.log(temperatures)

// // average temperature
// // const northTemperatures = [50, 51, 52]
// // const southTemperatures = [70, 71, 72]

// // let northSum = 0
// // for (let i = 0; i < northTemperatures.length; ++i){
// //     northSum += northTemperatures[i]
// // }

// // let southSum = 0
// // for (let i = 0; i < southTemperatures.length; ++i){
// //     southSum += southTemperatures[i]
// // }

// // const italyTemperatures = {
// //     northTemperatures: northSum / northTemperatures.length,
// //     southTemperatures: southSum / southTemperatures.length,
// // }

// // console.log(
// //     'the average temperature in the north is ',
// //     italyTemperatures.northTemperatures,
// // )

// // console.log(
// //     'the average temperature in the south is ',
// //     italyTemperatures.southTemperatures
// // )

// // The document object model (DOM) is a programming interface for HTML and XML documents. It represents
// // the page  so that programs can change the document structure, style and content.

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
// // generate a random color

// tasks
// find when the user clicks ont he show modal button
// open the modal
// close the modal when the user clicks on the x button

// const openModal = document.querySelector(".open-modal");
// const modal = document.querySelector(".modal");

// openModal.addEventListener("click", function () {
//   modal.classList.remove("modal");
// });
