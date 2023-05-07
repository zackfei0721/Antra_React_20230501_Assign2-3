// Pick 6 of the following array methods and implement your own version
// of them: reduce, filter, find, concat, push, pop, slice, 
// splice, some, every, reverse.

//......................................................................
//......................................................................
// 1. Creating a myReduce() function:
function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (const element of arr){
        accumulator = callback(accumulator, element);
    }
    return accumulator;
}
const arr = [1, 2, 3, 4];
// Using reduce():
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 10
// Using myReduce():
const sum2 = myReduce(arr, (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum2); // Output: 10


//......................................................................
//......................................................................
// 2. Creating a myFilter() function:
function myFilter(arr, callback) {
    const result = [];
    for (const element of arr) {
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}
const array2 = [1, 2, 3, 4, 5];
// Using filter():
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Using myFilter():
const evenNumbers2 = myFilter(arr2, num => num % 2 === 0);
console.log(evenNumbers2);


//......................................................................
//......................................................................
// 3. Creating a myFind() function:
function myFind(arr, callback) {
    for (const element of arr) {
        if(callback(element)){
            return element;
        }
    }
    return undefined;
}
const numbers = [3, 7, 5, 9, 2, 8, 1];
// Using find():
const firstEvenNum = numbers.find(num => num % 2 === 0);
console.log(firstEvenNum); // Output: 2
// Using myFind():
const firstEvenNum_1 = myFind(numbers, num => num % 2 === 0);
console.log(firstEvenNum_1); // Output: 2


//......................................................................
//......................................................................
// 4. Creating a myConcat() function:
function myConcat(...arrays) {
    const result = [];
    for(const arr of arrays){
        for(const element of arr) {
            result.push(element);
        }
    }
    return result;
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// Using concat():
const combinedArr = arr1.concat(arr2, arr3);
console.log(combinedArr);
// Using myConcat():
const combinedArr_1 = myConcat(arr1, arr2, arr3);
console.log(combinedArr_1);


//......................................................................
//......................................................................
// 5. Creating a myPush() function:
function myPush(arr, ...elements) {
    for (const element of elements) {
        arr[arr.length] = element;
    }
    return arr.length;
}
// Using push():
const pushedArr = arr1.push(4, 5);
console.log(arr1);
arr1.length = 3;
//Using myPush():
const pushedArr_1 = myPush(arr1, 4, 5);
console.log(arr1);


//......................................................................
//......................................................................
// 6. Creating a mySlice() function:
function mySlice(arr, start = 0, end = arr.length){
    const result = [];
    for (let i = start; i < end && i < arr.length; i++){
        result.push(arr[i]);
    }
    return result;
}
const array = [1,2,3,4,5,6,7,8];
// Using slice():
const slicedArr = array.slice(1, 4);
console.log(slicedArr); // [2,3,4]
// Using mySlice():
const slicedArr_1 = mySlice(array, 1, 4);
console.log(slicedArr_1); // [2,3,4]

