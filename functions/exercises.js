function makeLine(size, char) {
    let hashLine = ''
    for (let i=0; i<size; i++) {
        hashLine += char
    }
    return hashLine
}
console.log(makeLine(5, '$'))

function makeSquare(size) {
    return makeRectangle(size, size)
}
// console.log(makeSquare(5))

function makeRectangle(length, height) {
    let rectangle = ''
    for (let i=0; i<height; i++) {
        rectangle += makeLine(length) + '\n'
    }
    return rectangle.slice(0, -1)
}
// console.log(makeRectangle(9, 4))

function makeDownwardStairs(height) {
    let triangle = ''
    for (let i=0; i<height; i++) {
        triangle += makeLine(i+1) + '\n'
    }
    return triangle.slice(0, -1)
}
// console.log(makeDownwardStairs(7))

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = ''
    for (let i=0; i<numSpaces; i++) {
        spaceLine += ' '
    }
    spaceLine += makeLine(numChars)
    for (let i=0; i<numSpaces; i++) {
        spaceLine += ' '
    }
    return spaceLine
}
// console.log(makeSpaceLine(4, 7))

function makeIsoscelesTriangle(height) {
    let triangle = ''
    for (let i=0; i<height; i++) {
        triangle += makeSpaceLine(height - i - 1, i * 2 + 1) + '\n'
    }
    return triangle.slice(0, -1)
}
// console.log(makeIsoscelesTriangle(9))

function makeDiamond(height) {
    let triangle = makeIsoscelesTriangle(height)
    let bottomHalf = '\n' + triangle.split('').reverse().join('')
    return triangle + bottomHalf
}
// console.log(makeDiamond(9))