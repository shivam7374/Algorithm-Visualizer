var random_array=document.getElementById('radom_array');
var array_generated=document.getElementById("array");

var i=0, j=0;
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
        console.log("BOSS");
        clearInterval(globinterval);
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

function callonclick()
{
    if(i==0)
    {
        var startinterval=setInterval(bubbleSort, 1000);
        globinterval=startinterval;
    }
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