var generate_array = document.getElementById("array_generator");
var array_size_input = document.getElementById("arraySizeInput");
var random_array = document.getElementById("radom_array");
var array_generated = document.getElementById("array");

var i = 0,
  j = 0,
  m = 0;
var start, end; //for recording the time
var globinterval;

function random_array_generator() {
  array_generated.innerHTML = "";
  for (var k = 0; k < 8; k++) {
    var val = randomIntFromInterval(10, 100);
    var node = document.createElement("div");
    node.setAttribute("class", "bar_view");
    node.style.height = val * 4 + "px";
    // var textnode = document.createTextNode(val);
    // node.appendChild(textnode);
    array_generated.appendChild(node);
  }
  i = 0;
  j = 0;
}

function array_generator() {
  let arrayValues = document.getElementById("arrvalues").value;
  let splittedValues = arrayValues.split(" ");
  let array_size = array_size_input.value || 10;
  array_generated.innerHTML = "";
  for (var k = 0; k < array_size; k++) {
    // var val = randomIntFromInterval(10, 100);
    var val;
    if (splittedValues.length == array_size) val = splittedValues[k] * 5;
    else val = randomIntFromInterval(10, 100);
    var node = document.createElement("div");
    node.setAttribute("class", "bar_view");
    node.style.height = val * 4 + "px";
    // var textnode = document.createTextNode(val);
    // node.appendChild(textnode);
    array_generated.appendChild(node);
  }
  i = 0;
  j = 0;
  if (splittedValues.length != array_size) {
    alert(
      "Size of array not matched with number of elements entered So generating random array of size " +
        array_size
    );
  }
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
