function sayHello(){
    console.log("Hello, world!");
}

// * setTimeout will execute passed function after those many seconds passed in 
setTimeout(sayHello,4*1000);

//* setInterval will execute a function for every interval 
setInterval(sayHello,5*1000);