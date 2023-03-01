let timeElement = document.getElementById("timedisplay")
let startButton=document.getElementById("start");
let stopButton=document.getElementById("stop");
let resetButton=document.getElementById("reset");


let seconds=0;
let interval=null;

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


stopButton.onclick=function(){
    clearInterval(interval);
    interval=null;
}


resetButton.onclick=function(){
    clearInterval(interval);
    interval=null;
    seconds=0;
    timeElement.innerText='00:00:00';
}
