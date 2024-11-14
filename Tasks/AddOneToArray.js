
function validateNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
            return false;
        }
        if (isNaN(array[i]) ) {
            return;
        }
    }

    return true;

}


function addOneToArrayNumber(array) {
    if (!validateNumber(array)) {
        return;
    }

    for (let index = array.length - 1; index >= 0; index--) {
        if (array[index] < 9){
            array[index] = array[index] + 1;
            return array;
        }else{
            array[index] = 0;
        }
    }
    array.unshift(1);
    return array;
}

const numbers = [9, 9, 8, 9];
// console.log(addOneToArrayNumber(numbers));

module.exports = {addOneToArrayNumber}