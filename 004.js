// TOPICS COVERED---------------------------------------------------
// objects
// DOMContentLoaded
// addEventListener()
// array.length
// textContent
// -----------------------------------------------------------------
window.onload = function(){

    const profile = ["./001.png" , "./002.png" , "003.png" , "./004.png"];
    const name = ["Aly Baker", "Aditya verma" , "johny depp" , "monkey d luffy"];
    const profession = ["writer" , "god" ,"actor" , "MC"];
    const review = ["Lorem5" , "page, you could make your JavaScript asynchronous and optimize loading of stylesheets. If loaded as usual, stylesheets slow down DOM parsing as they're loaded in parallel, 'stealing' traffic from the main html document." , "when the DOM is ready. In earlier versions of Internet Explorer, this state can be detected by repeatedly trying to execute document.documentElement.doScroll","jgiygfosdfj"];
    var counter = 0;

    right.onclick = function(){
        console.log(counter);
        document.querySelector("#image").src = profile[counter];
       document.querySelector('.review').innerHTML = review[counter];
      document.querySelector(".name").innerHTML = name[counter];
      document.querySelector(".profession").innerHTML = profession[counter];
      counter++;
      if(counter > 3){
        counter = 0;
      }

    }

    left.onclick = function(){
        counter--;
        document.querySelector("#image").src = profile[counter];
       document.querySelector('.review').innerHTML = review[counter];
       if(document.querySelector('.review').innerHTML == "undefined"){
        counter = 0;
      }
      document.querySelector(".name").innerHTML = name[counter];
      document.querySelector(".profession").innerHTML = profession[counter];
      if(counter == 0){
         counter  = 4;  
      }
    }


}