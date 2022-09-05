// console.log("hello world");

// 3 functions acting when buttons are clicked..
// increaseCounter()
// increaseCounter()

// selecting the id = `number` from the html using  
var number  = document.getElementById('number');
function resetCounter(){
    // console.log("resetto0");
   number.innerHTML = 0;
}
//  declaring this variable globally makes things reasonble
var counter =  0;

function increaseCounter(){
    // console.log("increasedbyone");
    counter++;
    number.innerHTML = counter;
}
function decreaseCounter(){
    // console.log("increasedbyone");
    counter--;
    // if(counter == 0){
    //     alert("negatives people are not appreciated");
    // }
    number.innerHTML = counter;
}