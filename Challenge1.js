'use-strict';

const markObj = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;    
    }
};

const johnObj = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;    
    }
}

markObj.calcBMI();
johnObj.calcBMI();

if(markObj.bmi > johnObj.bmi) {
    console.log(`${markObj.fullName}'s' BMI (${markObj.bmi}) is higher than ${johnObj.fullName}'s (${johnObj.bmi})`);
} else {
    console.log(`${johnObj.fullName}'s' BMI (${johnObj.bmi}) is higher than ${markObj.fullName}'s (${markObj.bmi})`);
}