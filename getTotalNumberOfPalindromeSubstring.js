// palindrome checker
const palindromeChecker = (str) => {
    const lowercaseStr = str.toLowerCase();
    const arr = lowercaseStr.split("");
    const reversedArr = arr.reverse();
    const reversedString = reversedArr.join("");

    if (lowercaseStr === reversedString) {
        return true;
    } else {
        return false;
    }
}

// convert array to string
const arrToStr = (arr) => {
    return arr.join("");
}

// find out total number of palindromic substring
const countSubstrings = (str) => {
    if (1 <= str.length <= 1000) {
        const arr = str.split("");
        let placeholderArray = [];
        let count = 0;

        arr.forEach((e, index) => {
            for (let i = index; i < arr.length; i++) {
                placeholderArray.push(arr[i]);
                placeholderString = arrToStr(placeholderArray);
                if (palindromeChecker(placeholderString)) {
                    count++;
                }
            }
            placeholderArray = [];
        })
        return count;
    } else {
        console.log("Enter string between 1-1000 charaters");
        return null;
    }
}

countSubstrings("abcba");