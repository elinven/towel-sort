module.exports = function towelSort (matrix) {
  return Array.isArray(matrix) == true ? matrix.reduce((arr, current, index) => index%2==0 ? arr.concat(current) : arr.concat(current.reverse()),[]) : [];
}
