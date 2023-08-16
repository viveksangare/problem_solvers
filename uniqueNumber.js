const uniqueNumber = (size, arr) => {
    const temp = arr.filter((e, index) => {
        for (let i = index; i <= arr.length; i++) {
            console.log(e, arr[i + 1])
            return e = arr[i + 1];
        }
        placeholderArray = [];
    })
    console.log(temp)
}

uniqueNumber(5, [2, 4, 4, 1, 1]);

//  4 , 0    i=0,   