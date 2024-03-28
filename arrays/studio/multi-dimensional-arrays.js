const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArr = food.split(",").sort();
let equipmentArr = equipment.split(",").sort();
let petsArr = pets.split(",").sort();
let sleepAidsArr = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
const cargoHold = [foodArr, equipmentArr, petsArr, sleepAidsArr]

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
console.log("Which cabinet would you like to select?\n");
let userSelection = input.question("Enter a number 0-3: ");
console.log();
let itemSelection = input.question("Now enter an item you would like to search for: \n");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// if (userSelection < 0 || userSelection > 3) {
//     console.log("That's not a cabinet!");
// } else {
//     console.log(`The cabinet you selected contains the following:\n`);
//     console.log(cargoHold[userSelection]);
// }

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let doesContain;
if (userSelection < 0 || userSelection > 3) {
    console.log("That's not a cabinet!");
} else {
    if (cargoHold[userSelection].includes(itemSelection)) {
        doesContain = "DOES";
    } else {
        doesContain = "DOES NOT";
    }
    console.log(`Cabinet ${userSelection} ${doesContain} contain ${itemSelection}.`);
}