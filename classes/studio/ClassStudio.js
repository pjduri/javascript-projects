//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name
        this.mass = mass
        this.scores = scores
    }

    //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    addScore(score) {
        this.scores.push(score)
    }

    average() {
        let scoreSum = 0
        for (let i=0; i < this.scores.length; i++) {
            scoreSum += this.scores[i]
        }
        return (Math.round((scoreSum / this.scores.length) * 10) / 10)
    }

    status() {
        let avg = this.average()
        if (avg >= 90) {
            return 'Accepted'
        } else if(avg >= 80) {
            return 'Reserve'
        } else if(avg >= 70) {
            return 'Probationary'
        } else {
            return 'Rejected'
        }
    }

}



const bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90])
const merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])
const gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62])

const animals = [bubbaBear, merryMaltese, gladGator]

for (const animal of animals) {
    console.log()
    console.log(`Name: ${animal.name}`)
    console.log(`Mass: ${animal.mass}`)
    console.log(`Scores: ${animal.scores.join(', ')}`)
    console.log(`${animal.name} earned an average test score of ${animal.average()}% and has a status of ${animal.status()}.`)
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
console.log('\nGlad Gator is determined to pass this thing and will keep trying to get that average up!\n')

let attempts = 1
console.log(`Attempt #: ${attempts}`)
while (gladGator.average() < 90) {
    gladGator.addScore(100)
    console.log(`Attempt #: ${++attempts}`)
}

console.log(`Glad Gator made Accepted status in ${attempts} attempts!`)