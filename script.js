var generate_array = document.getElementById("array_generator");
var array_size_input = document.getElementById("arraySizeInput");
var random_array = document.getElementById("radom_array");
var array_generated = document.getElementById("array");

var i = 0,
  j = 0,
  m = 0;
var start, end; //for recording the time
var globinterval;
//reset to initial by localstorage
function reset(){
    document.querySelectorAll(".disable").forEach((btn) => {
      btn.disabled = false;
      btn.style.backgroundColor = "green";
    });
  document.getElementById("array").innerHTML= localStorage.getItem("oldArr").trim();
  document.getElementById('reset').disabled = true;
  document.getElementById('reset').style.backgroundColor = "grey";
}

function random_array_generator() {
  array_generated.innerHTML = "";
  let n = randomIntFromInterval(10, 100);
  for (var k = 0; k < n; k++) {
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
  localStorage.setItem("oldArr", array_generated.innerHTML);
  changeWidth();
}

function array_generator_random() {
  let array_size = array_size_input.value || 10;
  array_generated.innerHTML = "";
  for (var k = 0; k < array_size; k++) {
    // var val = randomIntFromInterval(10, 100);
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
  localStorage.setItem("oldArr",array_generated.innerHTML);
  changeWidth();
}

function array_generator_elements() {
  let arrayValues = document.getElementById("arrvalues").value;
  let splittedValues = arrayValues.split(" ");
  let array_size = splittedValues.length || 10;
  array_generated.innerHTML = "";
  for (var k = 0; k < array_size; k++) {
    // var val = randomIntFromInterval(10, 100);
    var val = splittedValues[k] * 5;
    var node = document.createElement("div");
    node.setAttribute("class", "bar_view");
    node.style.height = val * 4 + "px";
    // var textnode = document.createTextNode(val);
    // node.appendChild(textnode);
    array_generated.appendChild(node);
  }
  i = 0;
  j = 0;
  localStorage.setItem("oldArr", array_generated.innerHTML);
  changeWidth();
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function stopButton(){
    clearInterval(globinterval);

    document.querySelectorAll(".disable").forEach((btn) => {
      btn.disabled = false;
      btn.style.backgroundColor = "green";
    });
    document.getElementById('reset').disabled = false;
    document.getElementById('reset').style.backgroundColor = "green";
    document.getElementById('stop').disabled = true;
    document.getElementById('stop').style.backgroundColor = "grey";

}

/*
* function that alters the width of the bars
*/
function changeWidth(){
  let slider = document.querySelector('[type=range]');
  let div = document.querySelectorAll('.bar_view');

  for (index = 0 ; index < div.length; index++) {
    div[index].style.width = slider.value + 'px';
  }
}
