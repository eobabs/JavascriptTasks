const{addOneToArrayNumber} = require('./AddOneToArray');

test ("Test that Array returns next number",() => {
    const numbers = [9,9,8,9];
    let result = addOneToArrayNumber(numbers);
    let answer = [9,9,9,0];
    expect(result).toEqual(answer);
})
