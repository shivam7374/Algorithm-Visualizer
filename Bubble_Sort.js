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
                // setTimeout(color_change, 500);
                // element1.backgroundColor ="aquamarine";
                // element2.backgroundColor ="aquamarine";
            }
            // setTimeout(color_change, 500);

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
