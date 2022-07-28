// Frequency Counting

// Write a function called same, which accepts two arrays. The function should return true IF every value in the array has its corresponding value squared in the second array. The frequency of values must be the same. 

// Nieve solution 
// time complexity - 0(n2) Quadratic

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        // this varibale gives us the index of arr[i]^2 in arr2. -1 indicates that the sqaure of arr1[i] is not present
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true
}

// console.log(same([1,2,3],[9,4,1]));

// More Efficient solution 
// time cimplexity - 0(3n) --> 0(n) Linear

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // each loop will count the frequency of both values in the arrays
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        // if the frequencyCounter1 key is not a key^2 in frequencyCounter2, return false
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // if we DO have a key^2 in frequencyCounter2, is the value (in our case matches) equal? IF not, return false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    // passes all conditions
    return true
}


// challange to test concept 

//Write a function validAnagrams to determine if the second string is an anagram to the first

function validAnagrams(string1, string2) {
    // check to see that string length are equal 
    if (string1.length !== string2.length) return false;

    // define two empty objects that will be populated with keys=chars values=char frequency 
    const string1Obj = {};
    const string2Obj = {};
    // 2 loops for/of, forEach, for to populate objects
    for (let val of string1) {
        const valLowered = val.toLowerCase();
        string1Obj[valLowered] ? string1Obj[valLowered] += 1 : string1Obj[valLowered] = 1
    }
    for (let val of string2) {
        const valLowered = val.toLowerCase();
        string2Obj[valLowered] ? string2Obj[valLowered] += 1 : string2Obj[valLowered] = 1
    }
    // last loop will loop through and object and logic inside loop will check if both objects have same keys and if the key values are the same
    for (let key in string1Obj) {
        if (!string2Obj[key]) return false
        if (string1Obj[key] !== string2Obj[key]) return false;
    }
    return true
}

// console.log(validAnagrams('cat',"CAt"));

// Multiple pointers pattern 

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. IMPORTANT: the array is sorted! 

// Nieve solution 
// time complexity - 0(n2) Quadratic due to nested loop

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return false;
}

// More Efficient solution - Needs work 
// time cimplexity - 0(3n) --> 0(n) Linear

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}



// console.log(sumZero([1, 2, 3, 4, 5, 6, -3, -1]))


function search_binary(sortedArr, value) {
    let start = 0;
    let end = sortedArr.length - 1;
    let middle = Math.floor((end + start) / 2);

    while (sortedArr[middle] !== value && start <= end) {
        if (value <= sortedArr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((end + start) / 2);
    }
    return sortedArr[middle] === value ? `${value} is found at index ${middle}/${sortedArr.length - 1}` : -1;

}
//console.log(search_binary([2, 5, 6, 9, 13, 15, 28], 13));

// FREQUENCY COUNTERS
// this pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or 0(n^2) operations with arrays/strings

//5^2 = 5 ** 2 AND 5^3 = 5 ** 3

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    // each loop will count the frequency of both values in the arrays
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) { // ForOf loops loop over values in an object
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) { //ForIn loops loop over keys in an object
        // if the frequencyCounter1 key is not a key^2 in frequencyCounter2, return false
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // if we DO have a key^2 in frequencyCounter2, is the value (in our case matches) equal? IF not, return false
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    // passes all conditions
    return true
}