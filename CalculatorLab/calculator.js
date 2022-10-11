const buttons = document.querySelectorAll('.calcButton');
const display = document.querySelector('#result');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear')
let displayData = "";

console.log(buttons);
console.log(display);
console.log(equals);
buttons.forEach(button => {
  button.addEventListener('click', () => { 
      let buttonValue = button.getAttribute('data-num');
      displayData += buttonValue;
      display.textContent = displayData;
  })
})

equals.addEventListener('click', () => {
    try {
        displayData = eval(displayData);
        display.textContent = displayData;
    }
    catch(e)
    {
        display.textContent = "ERROR";
    }
})

clear.addEventListener('click', () => {
    displayData = "";
    display.textContent = displayData; 
})


