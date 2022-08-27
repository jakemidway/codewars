function sumArray(array) {
    let sum = 0

    if (!array) {
        return sum
    } else {
        let arr = array

        arr.sort((a, b) => a - b)

        // arr.forEach(element => {
        //     console.log(element)
        // });

        for (let i = 0; i < arr.length; i++) {
            if (i == 0 || i == arr.length - 1) {
                console.log('continue')
                continue
            }
            sum += arr[i]
            console.log(arr[i])
        }

        // console.log(arr)
        return sum
    }
}





console.log(sumArray([-6, 20, -1, 10, -12]))