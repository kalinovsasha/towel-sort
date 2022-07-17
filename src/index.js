// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == [] || !matrix) {
        return [];
    }
    let buffer = [];
    for (i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            buffer = [...buffer, ...matrix[i]];
        } else {
            buffer = [...buffer, ...matrix[i].reverse()];
        }
    }
    return buffer;
};
