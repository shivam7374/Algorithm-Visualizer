var random_array=document.getElementById('radom_array');
var array_generated=document.getElementById("array");

var i=0, j=0,m=0;
var from,mid,to;
var mi,mj,mk;
var start,end;
var globinterval;
var global_merge1_interval;
var temp; 
var flag=0;
function merge()
{
    
    var elements = document.getElementById('array').children; 
    var n=elements.length; 
    while (mi <= mid && mj <= to)
    {
        var element1=elements[mi].style;
        var element2=elements[mj].style;
        var val1=parseInt(element1.height);
        var val2=parseInt(element2.height);
        
        console.log("Val1",val1,val2);
        if (val1 < val2)
        {
            console.log("Val1",val1,val2);
            temp[mk++] = val1;
            mi++;
        }
        else
            {
                temp[mk++] = val2;
                mj++;
            }
    }
 
    // Copy remaining elements
    while (mi < n && mi <= mid)
    {
        var element1=elements[mi].style;  
        var val1=parseInt(element1.height);
        temp[mk++] = val1;
        mi++;
    }
    
 
    // Don't need to copy second half
    console.log(temp);
    // copy back to the original array to reflect sorted order
    for (mi = from; mi <= to; mi++)
    {   
        var element1=elements[mi].style;
        element1.height=temp[mi]+"px";
        // element1.backgroundColor ="aquamarine";
        if(flag==0)
        {
            element1.backgroundColor ="red";
        }
        else{
            element1.backgroundColor ="orange";
        }
    }
    if(flag==0)
    {
        flag=1;
    }
    else{
        flag=0;
    }
}


function mergeSort()  
{  
    
    var elements = document.getElementById('array').children; 
    var n=elements.length; 
    // var element1=elements[j].style;
    // var element2=elements[j+1].style;
    // var val1=parseInt(element1.height);
    // var val2=parseInt(element2.height);
    // element1.backgroundColor ="red";
    // element2.backgroundColor ="red";

    from = i;
    mid = i + m - 1;
    to = Math.min(i + 2*m - 1, n-1);
     
    mk = from;
    mi = from; 
    mj = mid + 1;
    console.log(from,mid,to);
    console.log(mk,mi,mj);
    merge();
    // var startinterval=setInterval(merge1, 10);
    // global_merge1_interval=startinterval;

    i+=(2*m);
    if(i>=(n-1))
    {
        m=m*2;
        i=0;
    // // element1.backgroundColor ="aquamarine";
    // element2.backgroundColor ="aquamarine";
    // for (var z = 0; z <n; z++)
    // {   
    //     var element1=elements[z].style;
    //     element1.backgroundColor ="orange";
    // }
    }
    if(m>=n)
    {
        // var elements = document.getElementById('array').children; 
        // elements[0].style.backgroundColor ="aquamarine"
        end = window.performance.now();
        console.log(`Execution time: ${end - start} ms`);
        // console.log("BOSS");
        clearInterval(globinterval);
    }
}  

function merge_sortonclick()
{
    start = window.performance.now();
    i=0,m=1;
    var elements = document.getElementById('array').children; 
    var n=elements.length; 
    var myArray = new Array(n);
    temp=myArray;
    var startinterval=setInterval(mergeSort, 1000);
    globinterval=startinterval;
}


function bubbleSort()  
{  
    
    var elements = document.getElementById('array').children; 
    var n=elements.length; 
    var element1=elements[j].style;
    var element2=elements[j+1].style;
    var val1=parseInt(element1.height);
    var val2=parseInt(element2.height);
    element1.backgroundColor ="red";
    element2.backgroundColor ="red";

    if (val1 > val2)
    {
        element1.backgroundColor ="orange";
        element2.backgroundColor ="orange";
        element1.height=val2+"px";
        element2.height=val1+"px";
    }

    j++;
    if(j==(n-i-1))
    {
        j=0;
        i++;
    // element1.backgroundColor ="aquamarine";
    element2.backgroundColor ="aquamarine";
    }
    if(i==n-1)
    {
        var elements = document.getElementById('array').children; 
        elements[0].style.backgroundColor ="aquamarine"
        end = window.performance.now();
        console.log(`Execution time: ${end - start} ms`);
        // console.log("BOSS");
        clearInterval(globinterval);
    }
}  

function bubble_sortonclick()
{
    start = window.performance.now();
    i=0,j=0;
    var startinterval=setInterval(bubbleSort, 1000);
    globinterval=startinterval;
}

var key_insertion;
function insertionSort()  
{  
    var elements = document.getElementById('array').children; 
    var n=elements.length; 
    var element1=elements[j].style;
    var element2=elements[j+1].style;
    var val1=parseInt(element1.height);
    // element1.backgroundColor ="red";
    // element2.backgroundColor ="red";

    if (val1 > key_insertion)
    {
        element2.backgroundColor ="orange";
        element2.height=val1+"px";
        j--;
    }
    if(j==-1 || val1 <= key_insertion){
        j++;
        elements[j].style.height=key_insertion+"px";
        i++;
        if(i==n)
        {
            end = window.performance.now();
            console.log(`Execution time: ${end - start} ms`);
            // console.log("BOSS");
            clearInterval(globinterval);
        }
        else{
            key_insertion=parseInt(elements[i].style.height);
            elements[i].style.backgroundColor="purple";
            j=i-1;
            element2.backgroundColor ="aquamarine";
        }
    }
} 

function insertion_sortonclick()
{
    start = window.performance.now();
    i=1,j=0;
    var elements = document.getElementById('array').children; 
    key_insertion=parseInt(elements[i].style.height);
    elements[i].style.backgroundColor="purple";
    var startinterval=setInterval(insertionSort, 1000);
    globinterval=startinterval;
}

var min_idx;
function selectionSort()  
{  
    var elements = document.getElementById('array').children; 
    var n=elements.length; 
    var element1=elements[j].style;
    var element2=elements[min_idx].style;
    var val1=parseInt(element1.height);
    var val2=parseInt(element2.height);
    element1.backgroundColor ="red";

    if (val1 < val2)
    {
        min_idx=j;
        elements[min_idx].style.backgroundColor ="orange";
        // element1.height=val2+"px";
        // element2.height=val1+"px";
    }

    j++;
    if(j==(n))
    {
        var elements = document.getElementById('array').children; 
        var element3=elements[i].style;
        var val3=parseInt(element3.height);
        var val4=parseInt(elements[min_idx].style.height);
        elements[min_idx].style.height=val3+"px";
        element3.height=val4+"px";
        elements[min_idx].style.backgroundColor="aquamarine";
        element3.backgroundColor="aquamarine";
        i++;
        min_idx=i;
        j=i+1;
    // element1.backgroundColor ="aquamarine";
    // element2.backgroundColor ="aquamarine";
    }
    if(i==n-1)
    {
        var elements = document.getElementById('array').children; 
        elements[n-1].style.backgroundColor ="aquamarine"
        end = window.performance.now();
        console.log(`Execution time: ${end - start} ms`);
        // console.log("BOSS");
        clearInterval(globinterval);
    }
} 

function selection_sortonclick()
{
    start = window.performance.now();
    i=0,j=1,min_idx=0;
    var startinterval=setInterval(selectionSort, 1000);
    globinterval=startinterval;
}


function random_array_generator(){
    array_generated.innerHTML="";
    for(var k=0;k<16;k++)
    {
        var val=randomIntFromInterval(10,100);
        var node = document.createElement("div");
        node.setAttribute("class","bar_view");  
        node.style.height=val*4+"px";     
        // var textnode = document.createTextNode(val);         
        // node.appendChild(textnode);                         
        array_generated.appendChild(node);    
    }
    i=0;
    j=0;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



function waitSeconds(iMilliSeconds) {
    var counter= 0, start = new Date().getTime(), end = 0;
    while (counter < iMilliSeconds) {
        end = new Date().getTime();
        counter = end - start;
    }
}

function color_change()
{
    var elements = document.getElementById('array').children;
    var element1=elements[j].style;
    var element2=elements[j+1].style;
    // element1.backgroundColor ="aquamarine";
    element2.backgroundColor ="aquamarine";
}
