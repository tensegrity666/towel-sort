
// You should implement your task here.

module.exports = function towelSort(matrix) {
  

  for (let i = 1; i < matrix.length; i += 2) {
    matrix[i].reverse();
  };

  const toFlat = matrix.reduce((accumulator, current) => {
    return accumulator.concat(current);
  });
  return toFlat;
}

