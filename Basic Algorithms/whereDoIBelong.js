function getIndexToInsert(arr, num){
    //find where in the array a number should be inserted by order, 
    //and return the index where it should go
    const sortingFunc = (a,b) => a-b
    const sortedArr = arr.sort(sortingFunc)
    for (let i = 0; i < sortedArr.length; i++){
        if (sortedArr[i] >= num){
            return sortedArr.indexOf(sortedArr[i])
        }
        else if (arr.length === 0){
            return 0
        }
    }
    if (num > Math.max(...sortedArr)){
        sortedArr.push(num)
        return sortedArr.indexOf(num)
    }

}
console.log(getIndexToInsert([2, 5, 10], 15));