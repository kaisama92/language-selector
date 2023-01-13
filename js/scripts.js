function add(number1, number2, number3, number4, number5) {
  return number1 + number2 + number3 + number4 + number5;
}

function handleSelect(event) {
  event.preventDefault();
  const input1 = parseInt(document.getElementById("select-beverage").value);
  const input2 = parseInt(document.getElementById("select-car").value);
  const input3 = parseInt(document.getElementById("select-animal ").value);
  const input4 = parseInt(document.getElementById("select-shoe"));
  const input5 = parseInt(document.getElementById("select-event"));
  
  let output = document.getElementById("output")
  let totalValue = parseInt(add(input1, input2, input3, input4, input5));

  if (totalValue <= 5) {
    output = "JavaScript"
  } else if (totalValue > 5 && totalValue <= 10) {
    output = "Python"
  } else if (totalValue > 10) {
    output = "C++"
  }
}

window.addEventListener("load", function() {
  this.document.getElementById("select-form").addEventListener("submit", handleSelect);
})