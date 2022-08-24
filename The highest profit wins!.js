function minMax(arr) {
    let minMax = []
    
    
    minMax[0] = arr.sort(function(a, b){return a - b})[0]
    minMax[1] = arr.sort(function(a, b){return b - a})[0]

    
    
    return minMax; // fix me!
}











console.log(minMax([1, 2, 3, 4, 5]))