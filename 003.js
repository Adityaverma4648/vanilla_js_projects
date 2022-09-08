window.onload = function () {

    // topics covered
    // document.querySelector()
    // addEventListener()
    // classList.toggle()
    // classList.remove()

    //  toggle logic

    // variables
    // var burger = document.getElementById('burger');
    // var close = document.getElementById('close');
    // var sidebar = document.getElementById('sidebar');
    
    // function   my old logic how i would have done this
    // burger.onclick = function(){
    //     var des = Boolean(sidebar.style.display == "none");
    //     if(des){
    //         sidebar.style.display = "block";
    //     }
    //     else{
    //         sidebar.style.display = "none";
    //     }
    // }

    // close.onclick = function(){
    //         sidebar.style.display = "none";
    //     }



    //  new logic
    var burger = document.querySelector('#burger');
    var close = document.querySelector('#close');


     burger.onclick = function (){
        console.log("clicked");
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle("removesidebar");
    }

    close.onclick = function(){
        var sidebar = document.querySelector('#sidebar');
        sidebar.classList.add("removesidebar")
    }

// ----------------------------------------------------------------
    //  slideshow
        var div1 = document.getElementById('001');
        var div2 = document.getElementById('002');
        var div3 = document.getElementById('003');
        var div4 = document.getElementById('004');
        div2.style.display ="none";
        div3.style.display ="none";
        div4.style.display ="none";

        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var btn3 = document.getElementById('btn3');
        var btn4 = document.getElementById('btn4');

        btn1.onclick = function() {
            div2.style.display ="none";
            div3.style.display ="none";
            div4.style.display ="none";
            div1.style.transition = "all 0.2s "
        var des = Boolean(div1.style.display = "none");
            if(des){
             div1.style.display = "block";
            }
            else{
             div1.style.display = "none";

            }
        }
        btn2.onclick = function(){
            div2.style.transition = "all 0.2s "
            div1.style.display = "none";
            div2.style.display  = "block";
            div3.style.display ="none";
            div4.style.display ="none";
        }

        btn3.onclick = function(){
            div4.style.transition = "all 0.2s "
            div1.style.display = "none";
            div2.style.display  = "none";
            div3.style.display ="block";
            div4.style.display ="none";
        }

        btn4.onclick = function(){
            div4.style.transition = "all 0.2s "
            div1.style.display = "none";
            div2.style.display  = "none";
            div3.style.display ="none";
            div4.style.display ="block";
        }
    }
