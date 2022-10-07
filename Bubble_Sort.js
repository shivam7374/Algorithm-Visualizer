function bubbleSort() {
  var elements = document.getElementById("array").children;
  var n = elements.length;
  var element1 = elements[j].style;
  var element2 = elements[j + 1].style;
  var val1 = parseInt(element1.height);
  var val2 = parseInt(element2.height);
  element1.backgroundColor = "red";
  element2.backgroundColor = "red";

  if (val1 > val2) {
    element1.backgroundColor = "orange";
    element2.backgroundColor = "orange";
    element1.height = val2 + "px";
    element2.height = val1 + "px";
  }

  j++;
  if (j == n - i - 1) {
    j = 0;
    i++;
    // element1.backgroundColor ="aquamarine";
    element2.backgroundColor = "blueviolet";
  }
  if (i == n - 1) {
    var elements = document.getElementById("array").children;
    elements[0].style.backgroundColor = "blueviolet";
    end = window.performance.now();
    console.log(`Execution time: ${end - start} ms`);
    // console.log("BOSS");
    clearInterval(globinterval);
  }
}

function bubble_sortonclick() {
  start = window.performance.now();
  (i = 0), (j = 0);
  var startinterval = setInterval(bubbleSort, 1000);
  globinterval = startinterval;
}
