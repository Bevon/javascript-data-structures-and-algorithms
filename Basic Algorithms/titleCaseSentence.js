function titleCase(str){
    const arr = str.split(' ')
    const caseArr = []
    for (let i = 0; i < arr.length; i ++){
        caseArr.push(arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase())
    }
    return caseArr.join(' ', '');
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))