function accum(s) {
    let sArr = s.split('')
    let Ss = []
    Ss = sArr.map( (item, i) => {
        let itemArr = []

        for (let j = 0; j < i + 1; j++){

            if (j == 0){
                itemArr.push(item.toUpperCase())
            }else{
                itemArr.push(item.toLowerCase())
            }
        }
        let newItem = itemArr.join('')
        return newItem
    })
    
    let string = Ss.join('-')
    return string
}



console.log(accum("**ьыpglnUвыаываыаы"))
console.log(accum("NyffsGeyylB"))
console.log(accum("MjtkuBovqrU"))
console.log(accum("EvidjUnokmM"))
console.log(accum("HbideVbxncC"))
