const startStopbtn=document.getElementById('startStopbtn');
const resetbtn=document.getElementById('resetbtn');

let seconds=0;
let minutes=0;
let hours=0;
let leadingseconds=0;
let leadingminutes=0;
let leadinghours=0;
let displayTimer;

function stopwatch(){
    seconds++;
    if(seconds===60){
        minutes++;
        seconds=0;
        if(minutes===60){
            hours++;
            minutes=0;
        }

    }
    if(seconds<10){
    leadingseconds=0+seconds.toString();
    }
    else{
        leadingseconds=seconds.toString();
    }
    if(minutes<10){
        leadingminutes=0+minutes.toString();
        }
        else{
            leadingminutes=minutes.toString();
        }
        if(hours<10){
            leadinghours=0+hours.toString();
            }
            else{
                leadinghours=hours.toString();
            }

        displayTimer=document.querySelector('#timer').innerText= leadinghours+':'+leadingminutes+':'+leadingseconds;
    

}

let timerStatus='stop';
let interval;
startStopbtn.addEventListener('click',function (){
    if(timerStatus==='stop'){
        interval=window.setInterval(stopwatch,1000);
        timerStatus='play';
         if(startStopbtn.classList.contains("play")){
            startStopbtn.classList.remove("play");
            startStopbtn.classList.add("pause");
            startStopbtn.setAttribute("title","Pause");
         }

    }
    else{
        window.clearInterval(interval);
        timerStatus='stop';
        if(startStopbtn.classList.contains("pause")){
            startStopbtn.classList.remove("pause");
            startStopbtn.classList.add("play");
            startStopbtn.setAttribute("title","Play");
         }
    }
    
});
resetbtn.addEventListener('click',function (){
    seconds=0;
    hours=0;
    minutes=0;
    window.clearInterval(interval);
    timerStatus='stop';
    document.querySelector('#timer').innerText='00:00:00';
    startStopbtn.classList.remove("play","pause");
    startStopbtn.classList.add("play");

})
if(startStopbtn.classList.contains("pause")){
    startStopbtn.setAttribute("title","Pause");

}
else{
    startStopbtn.setAttribute("title","Play");
}




