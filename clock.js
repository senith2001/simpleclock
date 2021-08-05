var sec = new Date().getSeconds();
var min = new Date().getMinutes();
var hours = new Date().getHours();




var hourtag = document.getElementById("id1");
var mintag = document.getElementById("id2");
var sectag = document.getElementById("id3");
var context = document.getElementById("id4");

time();

function time()
{

     sec = new Date().getSeconds();
     min = new Date().getMinutes();
     hours = new Date().getHours();
     
     
     if(hours<12){
          context.innerText = "AM";
     }
     else 
        context.innerText = "PM";
     hourtag.innerText = `H:  ${hours}`;
     mintag.innerText = `M: ${min}`;
     sectag.innerText =`S: ${sec}`;
     

}
setInterval(time,1000);