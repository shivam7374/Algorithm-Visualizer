var i=1, j=0;
var globinterval;

function bubbleSort()  
{  
    
    var elements = document.getElementById('array').children; 
    var n=elements.length; 
    var element1=elements[j].style;
    var element2=elements[j+1].style;
    var val1=parseInt(element1.height);
    element1.backgroundColor ="red";
    element2.backgroundColor ="red";

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
            console.log("BOSS");
            clearInterval(globinterval);
        }
        key_insertion=parseInt(elements[i].style.height);
        j=i-1;
        element2.backgroundColor ="aquamarine";
    }
}  
