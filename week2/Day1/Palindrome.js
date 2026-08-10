function palindrome(str) {

    let reverseStr = ""
    for (i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + (str[i]);
    }
if (str === reverseStr) {
    console.log(true);
}
else {
    console.log(false);
}


console.log(reverseStr)

}
palindrome("malayalam")