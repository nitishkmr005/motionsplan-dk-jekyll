let motionsplan = {}

motionsplan.IdealWeight = function(h, sex) {
  var h, sex;

  // Formulas only works for people over 152
  h = h - 152;
  sex = sex;

  function getRobinson() {
    if (sex == 'man') {
      return 52 + 0.75 * h;
    } 
    return 49 + 0.67 * h;
  }

  function getMiller() {
    if (sex == 'man') {
      return 56.2 + 0.56 * h;
    } 
    return 53.1 + 0.54 * h;
  }

  function getHamwi() {
    if (sex == 'man') {
      return 48.0 + 1.06 * h;
    } 
    return 45.5 + 0.87 * h;
  }

  function getDevine() {
    if (sex == 'man') {
      return 50.0 + 0.91 * h;
    } 
    return 45.5 + 0.91 * h;
  }

  var publicAPI = {
    getHamwi : getHamwi,
    getDevine : getDevine,
    getMiller : getMiller,
    getRobinson : getRobinson
  };

  return publicAPI;
}

module.exports = motionsplan;
