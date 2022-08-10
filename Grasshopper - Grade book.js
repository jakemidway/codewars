function getGrade(s1, s2, s3) {
    // Code here

    let average = (s1 + s2 + s3) / 3
    console.log(average)

    if (90 <= average) {
        console.log('Больше 90 и меньше 100 -- A')
        return 'A'
    } else if (average >= 80 && average < 90) {
        console.log('От 80 и меньше 90 -- B')
        return 'B'
    } else if (average >=70 && average < 80) {
        console.log('от 70 и меньше 80 -- С')
        return 'C'
    } else if (average >=60 && average < 70) {
        console.log('от 60 и меньше 70')
        return 'D'
    } else if (average < 60){
        console.log('меньше 60 -- F')
        return 'F'
    }
    console.log('ничего не произошло')
}


getGrade(95,90,93)
getGrade(70,70,100)
getGrade(82,85,87)
getGrade(70,70,70)
getGrade(75,70,79)
getGrade(66,62,68)
getGrade(48,55,52)