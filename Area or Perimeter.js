const areaOrPerimeter = function (l, w) {
    // Return your answer
    if (l == w){
        return l * w
    }else{
        return (l * 2) + (w * 3)
    }
}

console.log(areaOrPerimeter(4 , 4))
console.log(areaOrPerimeter(6 , 10))
