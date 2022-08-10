


let arr = [9, 3, '7', '3']




function sumMix(x){
    let sum = 0
    x.forEach(element => {
        sum = sum + +element
    });
    console.log(sum)
    return sum
}


sumMix(arr)