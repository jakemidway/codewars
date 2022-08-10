// Sum Numbers



let arr = [1, 5.2, 4, 0, -1]



function sum (numbers) {
    "use strict";
    let sum = 0
    numbers.forEach(element => {
        sum = sum + +element
        console.log(element)
    });
    console.log(sum)
};


sum(arr)