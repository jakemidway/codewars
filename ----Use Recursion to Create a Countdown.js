// function countup(n) {
//     if (n < 1) {
//         return [];
//     } else {

//         const countArray = countup(n - 1);
//         countArray.push(n);
//         return countArray;
//     }
// }
// console.log(countup(5));




// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countdown(n - 1);
//         countArray.unshift(n)
//         return countArray;
//     }

// }

// console.log(countdown(10))

// console.log(countdown(5))




function rangeOfNumbers(startNum, endNum) {

    if (startNum > endNum) {
        return []
    } else {
        let countArray = rangeOfNumbers(startNum + 1, endNum)
        console.log(startNum)
        
        countArray.unshift(startNum)
        console.log(countArray)
        
        return countArray;

    }
    
};

console.log(rangeOfNumbers(6, 9))
