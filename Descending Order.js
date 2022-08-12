function descendingOrder(n){
    //...
    let strN = String(n)
    let arrN = strN.split('')

    arrN.sort(function(a, b) {
        console.log( a + " <> " + b )
        return b - a; 
    })

    let num = arrN.join('')


    // for (let i = 0; i < arrN.length; i++){
    //     arrMax[i] = arrN[i]
    //     for(let i2 = i + 1; i2 < arrN.length; i2++){
    //         console.log(`${arrN[i]} --- ${arrN[i2]}`)
    //         if(arrN[i] < arrN[i2]){
                
    //             console.log(`arrN[i2] больше arrN[i]  ${arrN[i2]} больше ${arrN[i]}`)
    //         }
    //     } 
    // }

    console.log(typeof(num))  
    
    return +num
}


descendingOrder(0)
// descendingOrder(1021)