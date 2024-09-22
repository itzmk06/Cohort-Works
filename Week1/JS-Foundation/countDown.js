timeLeft=10;
const timer=setInterval(function(){
    console.log(timeLeft);
    timeLeft--;
    if(timeLeft<0){
        clearInterval(timer);
    }
},1000);