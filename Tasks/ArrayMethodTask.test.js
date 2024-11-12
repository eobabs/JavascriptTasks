const {checkExcellentScores, addBonusMark, squareNumbers} = require("./ArrayMethod");

test ("Test that Scores are greater than or equal to 70",() => {np
    const numbers = [81, 62, 73, 94, 75, 66, 54, 90, 10, 34];
    let result = checkExcellentScores(numbers);
    let answer = [81, 73, 94, 75, 90];
    expect(result).toEqual(answer);
})

test("add bonus to each score", ()=> {
    const numbers = [85, 92, 78, 88, 95];
    let result = addBonusMark(numbers);
    let answer = [90, 97, 83, 93, 100];
    expect(result).toEqual(answer);
})

test("square each number", ()=> {
    const numbers = [5, 2, 7, 8, 9];
    let result = squareNumbers(numbers);
    let answer = [25, 4, 49, 64, 81];
    expect(result).toEqual(answer);
})

