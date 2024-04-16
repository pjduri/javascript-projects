// Define your Book class here:
class Book {
    constructor(title,
        author,
        copyrightDate,
        ISBN,
        numPages,
        numCheckouts,
        isDiscarded = 'No'
    ) {
        this.title = title
        this.author = author
        this.copyrightDate = copyrightDate
        this.ISBN = ISBN
        this.numPages = numPages
        this.numCheckouts = numCheckouts
        this.isDiscarded = isDiscarded
    }

    checkout(num = 1) {
        this.numCheckouts += num
    }
}


// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckouts, isDiscarded) {
        super(title, author, copyrightDate, ISBN, numPages, numCheckouts, isDiscarded)
    }

    discard() {
        if (2024 - this.copyrightDate > 5) {
            this.isDiscarded = 'Yes'
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckouts, isDiscarded) {
        super(title, author, copyrightDate, ISBN, numPages, numCheckouts, isDiscarded)
    }

    discard() {
        if (this.numCheckouts > 100) {
            this.isDiscarded = 'Yes'
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
const pridePrejudice = new Novel('Pride and Prejudice',
    'Jane Austen',
    1813,
    1111111111111,
    432,
    32,
    'No'
)

const eyesOnly = new Manual('Top Secred Shuttle Building Manual',
    'Redacted',
    2013,
    0o0,
    1147,
    1,
    'No'
)


// Code exercises 4 & 5 here:
console.log(pridePrejudice.title)
console.log(`Current number of checkouts: ${pridePrejudice.numCheckouts}`)
console.log(`Is it discarded? ${pridePrejudice.isDiscarded}.`)
pridePrejudice.discard()
console.log(`How about now? ${pridePrejudice.isDiscarded}.\n`)
console.log(`Looks like ${pridePrejudice.title} has 5 unlogged checkouts.  Let's fix that.`)
pridePrejudice.checkout(5)
console.log(`New checkout total: ${pridePrejudice.numCheckouts} times.\n`)

console.log(eyesOnly.title)
console.log(`Is it discarded? ${eyesOnly.isDiscarded}.`)
eyesOnly.discard(2024)
console.log(`How about now? ${eyesOnly.isDiscarded}.`)