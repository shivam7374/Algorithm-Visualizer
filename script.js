var random_array=document.getElementById('radom_array');
var array_generated=document.getElementById("array");

var i=0, j=0,m=0;
var start,end;//for recording the time 
var globinterval;


function random_array_generator(){
    array_generated.innerHTML="";
    for(var k=0;k<8;k++)
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

