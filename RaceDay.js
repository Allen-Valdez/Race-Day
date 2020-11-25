//This assigns a random race number between 0 and 1000
let raceNumber = Math.floor(Math.random() * 1000);
//This will determine if the participant registered early
let registeredEarly = true;
//This is the age of the participant 
let age = 16;

//Using a control flow statement, this checks whether the runner is and adult AND registered early
if (age >= 18 && registeredEarly) {
    raceNumber += 1000;
}

//Using another control flow staement, this will check age and register time to determine race time
if (age >= 18 && registeredEarly){
    console.log(`Racer number ${raceNumber}, you will be running at 9:30 am.`);
} else if (age >= 18 && !registeredEarly){
    console.log(`Racer number ${raceNumber}, you will be running at 11:00 am.`);
} else if(age < 18){
    console.log(`Racer number ${raceNumber} you will be running at 12:30 pm.`);
}else {
    console.log('You did not register');
}