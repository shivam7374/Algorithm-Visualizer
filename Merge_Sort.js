var from, mid, to;
var mi, mj, mk;
var global_merge1_interval;
var temp;
var flag = 0;

function merge() {

    var elements = document.getElementById('array').children;
    var n = elements.length;
    while (mi <= mid && mj <= to) {
        var element1 = elements[mi].style;
        var element2 = elements[mj].style;
        var val1 = parseInt(element1.height);
        var val2 = parseInt(element2.height);

        // console.log("Val1",val1,val2);
        if (val1 < val2) {
            // console.log("Val1",val1,val2);
            temp[mk++] = val1;
            mi++;
        }
        else {
            temp[mk++] = val2;
            mj++;
        }
    }

    while (mi < n && mi <= mid) {
        var element1 = elements[mi].style;
        var val1 = parseInt(element1.height);
        temp[mk++] = val1;
        mi++;
    }


    // console.log(temp);

    for (mi = from; mi <= to; mi++) {
        var element1 = elements[mi].style;
        element1.height = temp[mi] + "px";
        // element1.backgroundColor ="aquamarine";
        if (flag == 0) {
            element1.backgroundColor = "red";
        }
        else {
            element1.backgroundColor = "orange";
        }
    }
    if (flag == 0) {
        flag = 1;
    }
    else {
        flag = 0;
    }
}


function mergeSort() {

    var elements = document.getElementById('array').children;
    var n = elements.length;

    from = i;
    mid = i + m - 1;
    to = Math.min(i + 2 * m - 1, n - 1);

    mk = from;
    mi = from;
    mj = mid + 1;
    // console.log(from,mid,to);
    // console.log(mk,mi,mj);
    merge();

    i += (2 * m);
    if (i >= (n - 1)) {
        m = m * 2;
        i = 0;
    }
    if (m >= n) {
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
        clearInterval(globinterval);
    }
}

function merge_sortonclick() {
    document.getElementById('bubble').disabled = true;
    document.getElementById('bubble').style.backgroundColor = "grey";
    document.getElementById('merge').disabled = true;
    document.getElementById('merge').style.backgroundColor = "grey";
    document.getElementById('insertion').disabled = true;
    document.getElementById('insertion').style.backgroundColor = "grey";
    document.getElementById('selection').disabled = true;
    document.getElementById('selection').style.backgroundColor = "grey";
    start = window.performance.now();
    i = 0, m = 1;
    var elements = document.getElementById('array').children;
    var n = elements.length;
    var myArray = new Array(n);
    temp = myArray;
    var startinterval = setInterval(mergeSort, 1000);
    globinterval = startinterval;
}
