window.onload = function () {


    // time counter-----------------------------------------------------------
    var hour_assign = document.getElementById("hour");
    var min_assign = document.getElementById("min");
    var sec_assign = document.getElementById("sec");
    
    var hour = 0, sec = 0, min = 0 ;
    
    var start1 = document.getElementById("start1");
    var stop1 = document.getElementById("stop1");
    var reset1 = document.getElementById("reset1");
    var interval;
    
    start1.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTime,10);
    }
    
    
    stop1.onclick = function(){
        clearInterval(interval);
    }
    
    
    reset1.onclick = function(){
        clearInterval(interval);
        sec_assign.innerHTML = "00";
        min_assign.innerHTML = "00";
        hour_assign.innerHTML = "00";
    }
    
    function startTime()
    {
        sec++;
        if(sec <= 9){
            sec_assign.innerHTML = "0" + sec;
        }
    
        if(sec > 9){
            sec_assign.innerHTML = sec;
        }
        if(sec > 99){
           min++;
           min_assign.innerHTML = "0" + min;
           sec = 0;
           sec_assign.innerHTML = "0" + 0;
        }
        if(min > 9){
          min_assign.innerHTML = min;
        }
        if(min > 59){
            hour++;
            hour_assign.innerHTML = "0" + hour;
        }
    }
    
    
    function resetTime(){
        hour_assign.innerHTML = '00';
        min_assign.innerHTML = '00';
        sec_assign.innerHTML = "00";
    }
    }