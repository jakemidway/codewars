function rentalCarCost(d) {
    let sum = d * 40
    if (d >=7){
        sum -= 50
    }else if(d >= 3){
        sum -=20
    }
    console.log(sum)
}


rentalCarCost(5)