// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
const input1 = 32243;
function reverseNum(num){
    reversedNum = num.toString().split('').reverse().join('');
    return reversedNum;
}
console.log(reverseNum(input1)); // 34223

// 2. Write a JavaScript function that checks whether a 
// passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads 
// the same backward as forward, e.g., madam or nurses run.
const input2 = "Do Geese See God";
function isPalindrome(str){
    const cleanStr = str.replace(/ /g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    if (reversedStr === cleanStr) {
        console.log (str + ": This String is Palindrome");
    }
    else {
        console.log (str + ": This String is NOT Palindrome");
    }
}
isPalindrome(input2); // Do Geese See God: This String is Palindrome

// 3. Write a JavaScript function that generates all combinations
// of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
const input3 = "dog";
function subString(str){
    let result = [];
    for (let i=0; i < str.length; i++) {
        for (let j= i+1; j <= str.length; j++){
            result.push(str.slice(i, j));
        }
    }
    return result.join(',');
}
console.log(subString(input3)); // d,do,dog,o,og,g

// 4. Write a JavaScript function that returns a passed string
// with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in
// the passed string.
const input4 = 'webmaster';
function sortString(str){
    const sortedStr = str.split('').sort().join('');
    return sortedStr;
}
console.log(sortString(input4)); //abeemrstw


// 5. Write a JavaScript function that accepts a string as
// a parameter and converts the first letter of each word of
// the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
const input5 = 'the quick brown fox';
function capitalize(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalize(input5)); //The Quick Brown Fox


// 6. Write a JavaScript function that accepts a string as 
// a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
const input6 = 'Web Development Tutorial';
function longestWord(str) {
    return str.split(' ').reduce((a, b) => a.length > b.length ? a : b);
}
console.log(longestWord(input6)); //Development


// 7. Write a JavaScript function that accepts a string as 
// a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel
// and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
const input7 = 'The quick brown fox';
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('')
    .filter(char => vowels.includes(char)).length;
}
console.log(countVowels(input7)); // output: 5


// 8. Write a JavaScript function that accepts a number as 
// a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number 
// greater than 1 that has no positive divisors other than 1 and
// itself.
function isPrime(num) {
    let isPrime = true;
    if (num == 1) {
        console.log(num + " is not prime number as num = 1");
        isPrime = false;
    }

    for (let i = 2; i <=Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " is not prime number as it can be divided by " 
        + i);
        isPrime = false;
        break;
        }
    }
    
    if(isPrime) {
        console.log(num + " is a prime number")
    }
}
isPrime(7);
isPrime(1);
isPrime(9);


// 9. Write a JavaScript function which accepts an argument
//  and returns the type.
// Note : There are six possible values that typeof
//  returns: object, boolean, function, number, string,
//   and undefined.
function getType(arg) {
    return typeof arg;
}
console.log(getType(27));
console.log(getType("String"));


// 10. Write a JavaScript function which returns the n rows
//  by n columns identity matrix
function identityMatrix(num) {
    let matrix = [];

    for (let row = 0; row < num; row++){
        matrix[row] = [];
        for (let col = 0; col < num; col++){
            matrix[row][col] = row === col ? 1 : 0;
        }
    }
    return matrix;
}
console.log(identityMatrix(4));


// 11. Write a JavaScript function which will take an array of
//  numbers stored and find the second lowest and second
// greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
const input11 = [2, 3, 1, 4, 5]; // unsorted array
function secondComparison(arr) {
    sortedArr = arr.sort((a, b) => a - b);
    console.log("sorted array: " + sortedArr);
    console.log("second smallest value = " + sortedArr[1] + 
    "; second greatest value = " + sortedArr[sortedArr.length - 2])
}
secondComparison(input11);


// 12. Write a JavaScript function which says
//  whether a number is perfect.
// 6 = 1 + 2 + 3
// 28 = 1 + 2 + 4 + 7 + 14
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) console.log(num + " is a perfect number");
    else console.log(num + " is NOT a perfect number");
}
isPerfect(6);
isPerfect(28);
isPerfect(30);
isPerfect(8128);


// 13. Write a JavaScript function to compute the 
// factors of a positive integer.
function getFactors(num) {
    let result = [];
    for (i = 1; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            result.push(i);
            if(num / i !== i) {
                result.push(num / i);
            }
        }
    }
    return result.sort((a, b) => a - b);
}
console.log(getFactors(28));


// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
const amount = 46;
const coins = [25, 10, 5, 2, 1];
function pickCoins(amount, coins) {
    let result = [];
    coins.sort((a, b) => b - a);
    for (const coin of coins) {
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }
    return result;
}
console.log(pickCoins(amount, coins));


// 15. Write a JavaScript function to compute the value of 
// bn where n is the exponent and b is the bases. Accept b and n
// from the user and display the result.
function power(b, n) {
    return Math.pow(b, n);
}
console.log(power(2, 3)); // expected output = 2^3 = 8;
console.log(power(5, 4)); // expected output = 5^4 = 625

// 16. Write a JavaScript function to extract unique characters
// from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
const input16 = 'thequickbrownfoxjumpsoverthelazydog';
function uniqueStr(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;
}
console.log(uniqueStr(input16));


// 17. Write a JavaScript function to get the number of 
// occurrences of each letter in specified string
const input17 = "HelloWorld";
function letterOccurence(str) {
    const occurrences = {};
    for (const i of str) {
        occurrences[i] = (occurrences[i] || 0) + 1;
    }
    return occurrences;
}
console.log(letterOccurence(input17)); //{ H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 }


// 18. Write a function for searching JavaScript arrays
// with a binary search.
// Note : A binary search searches by splitting an 
// array into smaller and smaller chunks until it finds 
// the desired value.
const input18 = [1, 2, 3, 4, 5, 9];
function binarySearch(arr, value) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === value) {
            return mid;
        }
        else if (arr[mid] < value){
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch(input18, 9));


// 19. Write a JavaScript function that returns
//  array elements larger than a number.
const input19 = [1, 4, 7, 3, 9, 2, 5];
const value19 = 4;
function getSubArr(arr, num) {
    const result = [];
    for (const element of arr) {
        if (element > num){
            result.push(element);
        }
    }
    return result;
}
console.log(getSubArr(input19, value19)); // [ 7, 9, 5 ]


// 20. Write a JavaScript function that generates a
//  string id (specified length) of random characters.
// Sample character list: 
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function randomId(length) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = "";
    for (let i = 0; i < length; i ++){
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
}
console.log(randomId(8));


// 21. Write a JavaScript function to get all possible 
// subset with a fixed length (for example 2) combinations
// in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
const input21 = [1, 2, 3, 4];
function fixedLengthSubset(arr, length) {
    let result = [];

    function helper(start, subset) {
        if(subset.length === length){
            result.push(subset);
            return;
        }
        for (let i = start; i < arr.length; i++){
            helper(i+1, subset.concat(arr[i]));
        }
    }

    helper(0, []);
    return result;
}
console.log(fixedLengthSubset(input21, 3)); //[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]


// 22. Write a JavaScript function that accepts two 
// arguments, a string and a letter and the function will 
// count the number
// of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3
const input22 = "microsoft.com";
function countOccurence(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char){
            count ++;
        }
    }
    return count;
}
console.log(countOccurence(input22, 'o'));


// 23. Write a JavaScript function to find the 
// first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
const input23 = "abacddbec";
function firstNonRepeatedChar(str) {
    for (let i=0; i < str.length; i++){
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            return str.charAt(i);
        }
    }
}
console.log(firstNonRepeatedChar(input23));



// 24. Write a JavaScript function to apply Bubble Sort algorithm.
const input24 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function bubbleSort(arr) {
    let n = arr.length;
    for (let i =0; i < n; i++){
        for (let j = 0; j < n-i-1 ; j++){
            if (arr[j] < arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort(input24));


// 25. Write a JavaScript function that accept a list of 
// country names as input and returns the longest 
// country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
const input25 = ["Australia", "Germany", "United States of America"];
function longestCountryName(countries) {
    return countries.reduce((longest, country) => {
        return country.length > longest.length ? country : longest;
    }, "");
}
console.log(longestCountryName(input25));


// 26. Write a JavaScript function to find longest 
// substring in a given a string without repeating characters.
const input26 = "abcabcbb";
function longestSubstr(str) {
    let maxLength = 0;
    let currentSubstr = "";
    let longestSubstr = "";

    for (let char of str) {
        let index = currentSubstr.indexOf(char);
        if (index !== -1) {
            currentSubstr = currentSubstr.slice(index + 1);
        }
        currentSubstr += char;
        if (currentSubstr.length > maxLength) {
            maxLength = currentSubstr.length;
            longestSubstr = currentSubstr;
        }
    }
    return [currentSubstr, maxLength];
}
console.log(longestSubstr("siduofbsadoufsadfpiusag")); //[ 'dfpiusag', 8 ]



// 27. Write a JavaScript function that returns the
//  longest palindrome in a given string.
const input27 = "abcdogeeseseegodefg";
function longestPalindrome(str) {
    let longest = "";

    for (let i = 0; i<str.length; i++){
        for (let j = i+1; j <= str.length; j++){
            let subStr = str.slice(i, j);
            let reversedStr = subStr.split("").reverse().join("");
            if(subStr === reversedStr && subStr.length > longest.length) {
                longest = subStr;
            }
        }
    }
    return longest;
}
console.log(longestPalindrome(input27)); // dogeeseseegod


// 28. Write a JavaScript program to pass
//  a 'JavaScript function' as parameter
function greet(){
    return "Hello!"
}
function add(a, b){
    return a + b;
}
function callFunction(callback) {
    console.log("Calling function: " + callback.name);
    console.log(callback());
}
callFunction(greet);
callFunction(() => add(3, 4));


// 29. Write a JavaScript function to get the function name.
function getFnName(fn) {
    return fn.name;
}
function randomFunction() {}
console.log(getFnName(randomFunction));
