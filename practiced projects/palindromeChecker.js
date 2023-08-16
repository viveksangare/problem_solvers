const palindromeChecker = (str) => {
    const lowercaseStr = str.toLowerCase();
    const arr = lowercaseStr.split("");
    const reversedArr = arr.reverse();
    const reversedString = reversedArr.join("");

    if (lowercaseStr === reversedString) {
        console.log("Is a Palindrome");
        return true;
    } else {
        console.log("Is not a Palindrome");
        return false;
    }
}

palindromeChecker("abcba");