let arr=[10,20,30,40,50,60];
for(let i=0;i<arr.length/2;i++){
    let left=i;
    let right=arr.length-1-i;
    let temp;
    temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
}
console.log(arr);