module.exports = function reverse(n) {
    let array = n.toString().split('');
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== "-") {
            newArr.push(array[i]);
        }
    }
    let result = newArr.reverse().join('');
    return Number(result);
}
