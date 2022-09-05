function solution(str) {
    let array = str.split('')
    let revArr = []
    
    for (let i = 0; i < array.length; i ++){
        revArr.unshift(array[i])
    }

    console.log(array)
    console.log(revArr)
    return revArr.join('')
}




console.log(solution('world'))
console.log(solution('hello'))
console.log(solution(''))
console.log(solution('h'))