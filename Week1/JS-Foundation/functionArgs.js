function sum(a,b,funcToCall){
    let result=a+b;
    funcToCall(result);
};
function displaySum(data){
    console.log(`The sum is ${data}`);
};
function displayAns(data){
    console.log(`Result is ${data}`)
};

sum(20,40,displaySum);
sum(10,20,displayAns);