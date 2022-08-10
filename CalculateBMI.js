function bmi(weight, height) {
    let idx = weight / height ** 2
    if(idx <= 18.5){return "Underweight"}
    else if(idx <= 25.0){return "Normal"}
    else if(idx <= 30.0){return "Overweight"}
    else{return "Obese"}
}


console.log(bmi(80, 1.80))