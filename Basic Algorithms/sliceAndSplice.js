function frankenSplice(arr1, arr2, n){
    const arrSplice = [...arr2].splice(-n)
    const arrSlice  = arr2.slice(0, n);
    return [...arrSlice, ...arr1, ...arrSplice]
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));