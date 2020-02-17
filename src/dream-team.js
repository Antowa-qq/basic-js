module.exports = function createDreamTeam(team) {

  if (!Array.isArray(team)) { return false; }
  return team
    .filter(item => typeof (item) === "string")
    .map(item => item.split(' ').join('').toUpperCase()) // deleted escape adn to upper case // or  item.replace(/ /g,'')
    .sort()
    .reduce((x, y) => x + y[0], "");
};



