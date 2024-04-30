function checkScientificNumber() {
    var input = document.getElementById('numberInput').value;
    var scientificRegex = /^[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?$/;
    
    if (scientificRegex.test(input)) {
      document.getElementById('result').innerHTML = "Valid scientific number.";
    } else {
      document.getElementById('result').innerHTML = "Invalid scientific number. Please enter a valid scientific number.";
    }
  }
  