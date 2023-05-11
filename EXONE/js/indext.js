console.log("Exercise One")

var firstName = "Lee-Roy"
let surname = "Madella"
const subject = "Development"
let age = 30

let message = "Hello my name is " + firstName + " " + surname + ", I am " + age + " and I am studying " + subject

console.log(message)

console.log("Exercise Two")

let numOne, numTwo, numThree, numFour, answer

numOne = 10
numTwo = 3
numThree = 5
numFour = 2
answer = 0

answer = numOne + numTwo / numThree * numFour

console.log(answer)

console.log("Exercise Three")

let timmyAmount
let susanAmount
let timmyTaxRate
let susanTaxRate
let timmyTaxAmount
let susanTaxAmount
let totalTaxAmount

timmyAmount = 10
susanAmount = 25
timmyTaxRate = 0.15
susanTaxRate = 0.26


timmyTaxAmount = timmyAmount * timmyTaxRate
susanTaxAmount = susanAmount * susanTaxRate


totalTaxAmount = timmyTaxAmount + susanTaxAmount;

console.log("The Tax Man will have: R" + totalTaxAmount.toFixed(2))

console.log("Exercise Four")

let johnScore
let timScore
let alfieScore
let gwenScore
let totalScore
let updatedAverage
const numberOfStudents = 4
const maximumScore = 100

const additionalMarks = 7
johnScore += additionalMarks
timScore += additionalMarks
alfieScore += additionalMarks
gwenScore += additionalMarks

totalScore = johnScore + timScore + alfieScore + gwenScore;

updatedAverage = (totalScore / (numberOfStudents * maximumScore)) * 100

console.log("The updated average score is: " + updatedAverage.toFixed(2) + "/100")








