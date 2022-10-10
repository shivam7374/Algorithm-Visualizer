var key_insertion;
function insertionSort() {
  var elements = document.getElementById("array").children;

  var n = elements.length;
  var element1 = elements[j].style;
  var element2 = elements[j + 1].style;
  var val1 = parseInt(element1.height);

  if (val1 > key_insertion) {
    element2.backgroundColor = "orange";
    element2.height = val1 + "px";
    j--;
  }
  if (j == -1 || val1 <= key_insertion) {
    j++;
    elements[j].style.height = key_insertion + "px";
    i++;
    if (i == n) {
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
      clearInterval(globinterval);
    } else {
      key_insertion = parseInt(elements[i].style.height);
      elements[i].style.backgroundColor = "purple";
      j = i - 1;
      element2.backgroundColor = "blueviolet";
    }
  }
}

function insertion_sortonclick() {
  document.querySelectorAll(".disable").forEach((btn) => {
    btn.disabled = true;
    btn.style.backgroundColor = "grey";
  });
  document.getElementById('reset').disabled = true;
  document.getElementById('reset').style.backgroundColor = "grey";
  document.getElementById('stop').disabled = false;
  document.getElementById('stop').style.backgroundColor = "green";
  start = window.performance.now();
  (i = 1), (j = 0);
  var elements = document.getElementById("array").children;
  key_insertion = parseInt(elements[i].style.height);
  elements[i].style.backgroundColor = "purple";
  var startinterval = setInterval(insertionSort, 1000);
  globinterval = startinterval;
}
