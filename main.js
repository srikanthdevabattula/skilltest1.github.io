
// getting elements from html

let timeElement = document.getElementById("timedisplay")
let startButton=document.getElementById("start");
let stopButton=document.getElementById("stop");
let resetButton=document.getElementById("reset");

// initial display time is 0 seconds
// interval wad defined after start button clicked

let seconds=0;
let interval=null;

// click on the start button to start the timer. we using setInterval function for update the value
startButton.onclick=function(){
    if(interval){
        return
    }

    interval=setInterval(function(){
        seconds++;
    
        let hrs=Math.floor(seconds/ 3600);
        
        let mins=Math.floor((seconds -(hrs*3600))/60);
        let secs=seconds % 60;
    
        if (secs<10) secs='0'+secs;
        if (mins<10) mins='0'+mins;
        if (hrs<10) hrs='0'+hrs;
    
        timeElement.innerText=hrs+":"+mins+":"+secs;
    },1000);
}

// to stop the timer we use the clearInterval 
stopButton.onclick=function(){
    clearInterval(interval);
    interval=null;
}

// click on the reset the timer will go to 0
resetButton.onclick=function(){
    clearInterval(interval);
    interval=null;
    seconds=0;
    timeElement.innerText='00:00:00';
}
