window.onload = function () {
   // 3 functions acting when buttons are clicked..
// increaseCounter()
// increaseCounter()

// selecting the id = `number` from the html using  
var number  = document.getElementById('number');
var interval;
var decrease = document.getElementById('decrease');
var increase = document.getElementById('increase');
var reset = document.getElementById('reset');

reset.onclick = function (){
    clearInterval(interval);
   number.innerHTML = "00";
}
var counter =  0;

increase.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startCount,1);
}

decrease.onclick = function(){
    clearInterval(interval);
    interval = setInterval(decreaseCount,1);
}

function startCount(){
    
    counter++;
    if(counter <= 9){
        number.innerHTML = "0" + counter;
        }
    if(counter > 9){
        number.innerHTML = counter;
        }
    }

    function decreaseCount(){
        counter--;
        if(counter <= 9){
            number.innerHTML = "0" + counter;
            }
        if(counter > 9){
            number.innerHTML = counter;
            }
        if(counter < 0){
            clearInterval(interval);
            number.innerHTML = "00";
            alert("Increase Timer first");
        }
    }
    
}
