function findElement(arr, func){
    
    for (let num = 0; num < arr.length; num++){
        if (func(arr[num]) === true){
            return arr[num]
        }
    }
    return undefined
}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))