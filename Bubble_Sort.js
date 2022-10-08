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
    document.getElementById('bubble').disabled = false;
    document.getElementById('bubble').style.backgroundColor = "green";
    document.getElementById('merge').disabled = false;
    document.getElementById('merge').style.backgroundColor = "green";
    document.getElementById('insertion').disabled = false;
    document.getElementById('insertion').style.backgroundColor = "green";
    document.getElementById('selection').disabled = false;
    document.getElementById('selection').style.backgroundColor = "green";
    console.log(`Execution time: ${end - start} ms`);
    // console.log("BOSS");
    clearInterval(globinterval);

  }
  // resetBtn();
  len--;
}

function bubble_sortonclick() {
  document.getElementById('bubble').disabled = true;
  document.getElementById('bubble').style.backgroundColor = "grey";
  document.getElementById('merge').disabled = true;
  document.getElementById('merge').style.backgroundColor = "grey";
  document.getElementById('insertion').disabled = true;
  document.getElementById('insertion').style.backgroundColor = "grey";
  document.getElementById('selection').disabled = true;
  document.getElementById('selection').style.backgroundColor = "grey";

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
