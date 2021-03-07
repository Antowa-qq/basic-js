
module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  // const month = Date.prototype.getMonth.call(date);
  
  let seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }

  for (let key in seasons) {
    if (seasons[key].includes(Date.prototype.getMonth.call(date))) {
      return key;
    }
  }

}

