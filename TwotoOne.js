a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    arrSOne = s1.split('')
    arrSTwo = s2.split('')
    arrS3 = arrSOne.concat(arrSTwo)
    arrS3.sort()
    console.log(arrS3)
    
    arrS3.forEach(function (item, index, arr)    {
        console.log(`Проверяем на повтор ${item} index = ${index}`)
        for (let i = index + 1; i < arr.length; i++) {   
            if(item == arr[i]){
                console.log(`alert ${item} = ${arr[i]}`);
                arrS3.splice(i, 1)
                console.log(arrS3)
                i--
            }
        }
    })

    console.log(arrS3.join(''))
    return arrS3.join('')
}




longest(a, b)