let arr = [1,2,3,4,5]

function invert(array) {
    let invertArr = []
    array.forEach(element => {
        invertArr.push(element * -1)
    })

    return invertArr;
}


console.log(invert(arr))