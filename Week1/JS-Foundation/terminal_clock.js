const time=function(){
    let now=new Date();
    let hour=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    hour=hour<10?'0'+hour:hour;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
    console.clear();
    console.log(`Current time is ${hour} : ${min} : ${sec}`);
}
setInterval(time,1*1000);