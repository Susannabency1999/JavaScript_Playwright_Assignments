//return the length of the last word in the string
function lastWordLen(str){
    let newStr=str.split(" ");
    let result=newStr.length-1;
    lastWord=(newStr[result])
    console.log(lastWord.length)
}
lastWordLen(" fly me to the moon")

//Write a function to check if two strings are anagrams.

function isAnagram(str1, str2) {
    let newStr1 = str1.split("").sort().join("");
    let newStr2 = str2.split("").sort().join("");

    return newStr1 === newStr2;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   