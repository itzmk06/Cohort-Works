function calculateSum(a,b,funcCall){
    let ans=funcCall(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
function diff(a,b){
    return a-b;
}
let ans1=calculateSum(10,20,sum);
console.log(ans1);
let ans2=calculateSum(30,10,diff);
console.log(ans2);
