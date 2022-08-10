function getSum(a, b) {
    let min
    let max
    let count = 0  
    if (a <= b) {
        min = a
        max = b 
    }else{
        min = b
        max = a
    }
  
    for (let i = min; i <= max; i++) {
        console.log(i)
        count = count + i
        console.log(count)
    }

    console.log(count)
    return count
}


console.log(getSum(0, 100))