// alert("Hello Motto");
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// let marksBMI = marksWeight / marksHeight ** 2;
// console.log(marksBMI);
('use strict');

const pankaj = {
    fullName: "Pankaj Yadav",
    mass: 55,
    height: 1.7,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const sujal = {
    fullName: "Sujal Yadav",
    mass: 53,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

console.log("Pankaj Yadav");
pankaj.calcBMI();
sujal.calcBMI();

if(pankaj.bmi > sujal.bmi) {
    console.log(`${pankaj.fullName}'s BMI (${pankaj.bmi}) is higher than ${sujal.fullName}'s BMI (${sujal.bmi})`);
} else {
    console.log(`${pankaj.fullName}'s BMI (${pankaj.bmi}) is not higher than ${sujal.fullName}'s BMI (${sujal.bmi})`);
}