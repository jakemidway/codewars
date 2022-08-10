let arr = [101, 45, 75, 105, 99, 107]

function check(a, x) {
    let check = false
    a.forEach(element => {
        if (element == x){
            check = true
        }
    });

    return check
}


check(arr, 45)