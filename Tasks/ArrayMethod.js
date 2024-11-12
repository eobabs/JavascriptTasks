
array = [81, 62, 73, 94, 75, 66, 54, 90, 10, 34];


const checkExcellentScores = (array)=>{
    let result = array.filter((number) => number >= 70)

    return result;
}

console.log(checkExcellentScores(array));

const addBonusMark = (array)=>{
    let result = array.map((number)=>{
        let answer = number + 5;
        return answer
    });
    return result;
}
console.log(addBonusMark(array));

const squareNumbers = (array)=>{
    let result = array.map((number)=>{
        let answer = number * number;
        return answer
    });
    return result;
}
console.log(squareNumbers(array));


module.exports = {checkExcellentScores, addBonusMark, squareNumbers};