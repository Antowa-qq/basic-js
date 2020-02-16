module.exports = function countCats(arr) {
  return arr.flat().filter(item => item == '^^').length;
};
