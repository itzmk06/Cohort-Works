let arr=[10,20,30,1000,43,-1,22000];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>=max){
        max=arr[i];
    }
}
console.log(max);
