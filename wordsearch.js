const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (h of verticalJoin) {
        if (h.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch

const transpose = function (matrix) {
  const numRows = matrix.length; 
  const numColums = matrix[0].length

const transposedMatrix = [];
for (let i = 0; i < numColums; i++) {
  const newRows = [];

  for (let j = 0; j < numRows; j++){
    newRows.push(matrix[j][i]);
}
  transposedMatrix.push(newRows)
}
   // Replace this code with your solution
  return transposedMatrix;
};