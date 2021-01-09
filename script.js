var random_array=document.getElementById('radom_array');
var array_generated=document.getElementById("array");

var i=0, j=0;
var start,end;
var globinterval;

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

function random_array_generator(){
    array_generated.innerHTML="";
    for(var k=0;k<14;k++)
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
