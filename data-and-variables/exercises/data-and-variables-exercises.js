// Declare and assign the variables below
const shuttleName = 'Determination'
const shuttleSpeedMph = 17500
const distanceToMarsKm = 225000000
const distanceToMoonKm = 384400
const milesPerKm = 0.621

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)

// Calculate a space mission below
const milesToMars = distanceToMarsKm * milesPerKm
const hoursToMars = milesToMars / shuttleSpeedMph
const daysToMars = hoursToMars / 24

// Print the results of the space mission calculations below
console.log(`${shuttleName} will take ${daysToMars} days to reach Mars.`)

// Calculate a trip to the moon below
const milesToMoon = distanceToMoonKm * milesPerKm
const hoursToMoon = milesToMoon / shuttleSpeedMph
const daysToMoon = hoursToMoon / 24

// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${daysToMoon} days to reach the moon.`)