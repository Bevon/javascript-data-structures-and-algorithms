function mutation(arr){
    /*Return true if the string in the first element of the array contains
     all of the letters of the string in the second element of the array */
    const firstArr = arr[0].toLowerCase().split('').join('')
    const secondArr = arr[1].toLowerCase().split('')
    console.log(firstArr)

    for (let i = 0; i < secondArr.length; i++){
        console.log(secondArr[i])
        if (firstArr.indexOf(secondArr[i])=== -1){
            return false
        }
    }
    return true
}
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
