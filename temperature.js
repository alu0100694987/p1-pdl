
"use strict"; // ECMAScript 5 strict mode

function calculate() {
  
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /([+-]?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)\s*([cCfF])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result + " Fahrenheit";
    }
    
    else {
      result = (num - 32)*5/9;
      result = result + " Celsius";
    }
    
    converted.innerHTML = result;
  }
  
  else {
    converted.innerHTML = "Error: Try something like '-4.2C' instead";
  }
  
}