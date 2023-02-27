function bouncer(arr) {
    const nonFalsyElem = []
    for (let i = 0; i < arr.length; i++){
      if (Boolean(arr[i])){
        nonFalsyElem.push(arr[i])
      }
    }
    return nonFalsyElem;
  }
console.log(bouncer(['Ate', "", true]))  