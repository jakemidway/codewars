function validatePIN(pin) {
    
    if (pin.length == 4 || pin.length == 6) {

        let pinArray = pin.split('')

        for (let i = 0; i < pinArray.length; i++) {
            
            // console.log(pinArray[i])
            
            if (parseInt(pinArray[i]) !== 0) {
                if(!parseInt(pinArray[i])){
                    return false
                }
            }
        }
        return true
    } else {
        return false
    }
}

// validatePIN("0000")
console.log(validatePIN("1023"))
console.log(validatePIN("1"))
console.log(validatePIN("12"))
console.log(validatePIN("a234"))
console.log(validatePIN("1111"))
console.log(validatePIN("123456"))