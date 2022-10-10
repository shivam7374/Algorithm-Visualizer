var min_idx;
function selectionSort() {
  var elements = document.getElementById("array").children;
  var n = elements.length;
  var element1 = elements[j].style;
  var element2 = elements[min_idx].style;
  var val1 = parseInt(element1.height);
  var val2 = parseInt(element2.height);
  element1.backgroundColor = "red";

  if (val1 < val2) {
    min_idx = j;
    elements[min_idx].style.backgroundColor = "orange";
  }

  j++;
  if (j == n) {
    var elements = document.getElementById("array").children;
    var element3 = elements[i].style;
    var val3 = parseInt(element3.height);
    var val4 = parseInt(elements[min_idx].style.height);
    elements[min_idx].style.height = val3 + "px";
    element3.height = val4 + "px";
    elements[min_idx].style.backgroundColor = "blueviolet";
    element3.backgroundColor = "blueviolet";
    i++;
    min_idx = i;
    j = i + 1;
  }
  if (i == n - 1) {
    var elements = document.getElementById("array").children;
    elements[n - 1].style.backgroundColor = "blueviolet";
    end = window.performance.now();
    document.getElementById('bubble').disabled = false;
    document.getElementById('bubble').style.backgroundColor = "green";
    document.getElementById('merge').disabled = false;
    document.getElementById('merge').style.backgroundColor = "green";
    document.getElementById('insertion').disabled = false;
    document.getElementById('insertion').style.backgroundColor = "green";
    document.getElementById('selection').disabled = false;
    document.getElementById('selection').style.backgroundColor = "green";
    document.getElementById('reset').disabled = false;
    document.getElementById('reset').style.backgroundColor = "green";
    console.log(`Execution time: ${end - start} ms`);
    clearInterval(globinterval);
  }
}

function selection_sortonclick() {
  document.getElementById('bubble').disabled = true;
  document.getElementById('bubble').style.backgroundColor = "grey";
  document.getElementById('merge').disabled = true;
  document.getElementById('merge').style.backgroundColor = "grey";
  document.getElementById('insertion').disabled = true;
  document.getElementById('insertion').style.backgroundColor = "grey";
  document.getElementById('selection').disabled = true;
  document.getElementById('selection').style.backgroundColor = "grey";
  document.getElementById('reset').disabled = true;
  document.getElementById('reset').style.backgroundColor = "grey";
  start = window.performance.now();
  (i = 0), (j = 1), (min_idx = 0);
  var startinterval = setInterval(selectionSort, 1000);
  globinterval = startinterval;
}
