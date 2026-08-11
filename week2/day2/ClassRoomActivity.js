const arr= [1,2,3,2,4,5,1,4,9,7];
const newArr=[];
for (let i=0;i<arr.length;i++){
    
    for (let j = i+1; j < arr.length; j++){   //comparing the current element with next element in the array
        if (arr[i]==arr[j]){                  //finding duplicates
            newArr.push(arr[i]);

        }

    }
}
console.log(newArr);
