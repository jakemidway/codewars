
let arr = ['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']

const colon = ':'







function points(games) {
    let point = 0

    games.forEach(element => {
        let newArr = element.split(colon);
        console.log(`x = ${newArr[0]} а y = ${newArr[1]}`)
        if(newArr[0] > newArr[1]){
            point = point + 3
        }else if(newArr[0] == newArr[1]){
            point = point + 1
        }
        console.log(point)
    });
}


points(arr)