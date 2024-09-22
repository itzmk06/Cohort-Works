let arr=[
    {
        firstName:"Manoj",
        lastName:"M",
        gender:"male"
    },
    {
        firstName:"Ketaki",
        lastName:"A",
        gender:"female"
    },
    {
        firstName:"Samrath",
        lastName:"P",
        gender:"male"
    }
];
for(let i=0;i<arr.length;i++){
    if(arr[i]?.gender==="male"){
        console.log(arr[i]?.firstName);
    }
}