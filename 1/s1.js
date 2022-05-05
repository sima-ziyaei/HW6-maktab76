function sumArray(arr){
    let sum=0;
    let newArr=[];
    arr.forEach(x => {
        sum+=x;
        newArr.push(sum);
    });
    console.log(newArr);
}
sumArray([1, 2, 3, 4]);