const singleNumber = (arr) => {
    let uniqueNumber;
    arr.forEach((ele) => {
        if (arr.indexOf(ele) == arr.lastIndexOf(ele)) {
            uniqueNumber = ele;
        }
    })
    return uniqueNumber;
}

singleNumber([1,1,2,3,3]);