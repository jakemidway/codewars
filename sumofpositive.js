let arrNums = [1,-4,7,12]




function positiveSum(arr) {
    let sum = 0
    console.log(sum)
    arr.forEach(function(item){
        if(item > 0){
            sum = sum + item
        }
        console.log(item)
    })
    return sum
}


console.log(positiveSum(arrNums))
