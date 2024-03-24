// alert("Welcome");
let display = document.getElementById("display");
function calculate(value) {
  display.value += value;
}
function equal() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.error = "Error";
  }
}
  
  
  
  
  
  
  
  