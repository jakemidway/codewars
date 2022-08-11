function countPositivesSumNegatives(arr) {
    // your code here
    let arrForReturn = []
    
    if (arr == null || arr.length == 0) {
        return arrForReturn 
    } else {
        arrForReturn = [0, 0]
        arr.forEach(element => {
            if (element > 0) {
                arrForReturn[0] = arrForReturn[0] + 1
            } else if (element < 0) {
                arrForReturn[1] = arrForReturn[1] + element
            }
        });
    }



    return arrForReturn
}


let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];


console.log(countPositivesSumNegatives(testData))
console.log(countPositivesSumNegatives(null))
console.log(countPositivesSumNegatives([]))