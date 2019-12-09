let motionsplan = {}

motionsplan.CooperRunning = function() {

  // time in minutes
  function getVO22400MeterTest(min, sek) {
    var time = min + (sek / 60);
    return (483 / time) + 3.5;
  }

  // distance in meters
  function getVO212MinTest(distance) {
    return (distance - 504.9) / 44.73;
  }

  var publicAPI = {
    getVO22400MeterTest: getVO22400MeterTest,
    getVO212MinTest: getVO212MinTest

  };

  return publicAPI;
}

module.exports = motionsplan;
