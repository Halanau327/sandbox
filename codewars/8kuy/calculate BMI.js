function bmi(weight, height) {
    let bmi = weight / (height * height);
    return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}

bmi(60, 1.82);