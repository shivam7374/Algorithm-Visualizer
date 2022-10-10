var element = document.getElementById("array").children;
var len = element.length;
function bubbleSort() {
  var elements = document.getElementById("array").children
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
    document.querySelectorAll(".disable").forEach((btn) => {
      btn.disabled = false;
      btn.style.backgroundColor = "green";
    });
    document.getElementById('reset').disabled = false;
    document.getElementById('reset').style.backgroundColor = "green";
    document.getElementById('stop').disabled = true;
    document.getElementById('stop').style.backgroundColor = "grey";
    console.log(`Execution time: ${end - start} ms`);
    // console.log("BOSS");
    clearInterval(globinterval);

  }
  // resetBtn();
  len--;
}

function bubble_sortonclick() {
  document.querySelectorAll(".disable").forEach((btn) => {
    btn.disabled = true;
    btn.style.backgroundColor = "grey";
  });
  document.getElementById('reset').disabled = true;
  document.getElementById('reset').style.backgroundColor = "grey";
  document.getElementById('stop').disabled = false;
  document.getElementById('stop').style.backgroundColor = "green";

  start = window.performance.now();
  (i = 0), (j = 0);  //
  var startinterval = setInterval(bubbleSort, 1000);
  console.log(len);
  globinterval = startinterval;
  console.log("startinterval", startinterval);
  console.log("globinterval", globinterval);

  if(len!==0)
  {

  }
}
