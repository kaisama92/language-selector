function add(number1, number2) {
  return number1 + number2;
}

function handleSelect(event) {
  event.preventDefault();
  const input1 = parseInt(document.getElementById("select-beverage").value);
  const input2 = parseInt(document.getElementById("select-car").value);
  const input3 = parseInt(document.getElementById("select-animal").value);
  const input4 = parseInt(document.getElementById("select-shoe").value);
  const input5 = parseInt(document.getElementById("select-event").value);
  
  let output;
  //  = document.getElementById("output")
  let totalValue = ((((input1 + input2) + input3) + input4) + input5)
  // parseInt(add(parseInt(input1), parseInt(input2), parseInt(input3), parseInt(input4), parseInt(input5)));

  if (parseInt(totalValue) <= 5) {
    output = "JavaScript"
    console.log("What da hell")
  } else if (parseInt(totalValue) > 5 && totalValue <= 10) {
    output = "Python"
  } else if (totalValue > 10) {
    output = "C++"
  }

  document.getElementById("output").innerText = output
}

window.addEventListener("load", function() {
  this.document.getElementById("select-form").addEventListener("submit", handleSelect);
})