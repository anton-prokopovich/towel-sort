// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        i % 2 === 0
            ? (arr = arr.concat(matrix[i]))
            : (arr = arr.concat(matrix[i].reverse()));
    }
    return arr;
};
