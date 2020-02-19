module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }
  
  let seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }

  for (let key in seasons) {
    if (seasons[key].includes(date.getMonth())) {
      return key;
    }
  }

}

