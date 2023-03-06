function chunkArrayInGroups(arr, size){
    /*splits an array (first argument) into groups the length 
    of size (second argument) and returns them as a two-dimensional array.*/

    const motherArr = []

    for (let i = 0; i < arr.length + 1; i++){
        motherArr.push(arr.splice(0,size))  
    }
    if (arr.length === 1){
        motherArr.push(arr)
    }
    return motherArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));