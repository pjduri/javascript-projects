function makeLine(size, char = '#') {
    let hashLine = ''
    for (let i=0; i<size; i++) {
        hashLine += char
    }
    return hashLine
}
console.log(makeLine(5, '?'))

function makeSquare(size, char = '#') {
    return makeRectangle(size, size, char)
}
// console.log(makeSquare(5))

function makeRectangle(length, height, char = '#') {
    let rectangle = ''
    for (let i=0; i<height; i++) {
        rectangle += makeLine(length, char) + '\n'
    }
    return rectangle.slice(0, -1)
}
// console.log(makeRectangle(9, 4))

function makeDownwardStairs(height, char = '#') {
    let triangle = ''
    for (let i=0; i<height; i++) {
        triangle += makeLine(i+1, char) + '\n'
    }
    return triangle.slice(0, -1)
}
// console.log(makeDownwardStairs(7))

function makeSpaceLine(numSpaces, numChars, char = '#') {
    let spaceLine = ''
    for (let i=0; i<numSpaces; i++) {
        spaceLine += ' '
    }
    spaceLine += makeLine(numChars, char)
    for (let i=0; i<numSpaces; i++) {
        spaceLine += ' '
    }
    return spaceLine;
}
let outputLine = makeSpaceLine(3, 9)
console.log(outputLine)

function makeIsoscelesTriangle(height, char = '#') {
    let triangle = ''
    for (let i=0; i<height; i++) {
        triangle += makeSpaceLine(height - i - 1, i * 2 + 1, char) + '\n'
    }
    return triangle.slice(0, -1)
}
// console.log(makeIsoscelesTriangle(9))

function makeDiamond(height, char = '#') {
    let triangle = makeIsoscelesTriangle(height, char)
    let bottomHalf = '\n' + triangle.split('').reverse().join('')
    return triangle + bottomHalf
}
// console.log(makeDiamond(9))