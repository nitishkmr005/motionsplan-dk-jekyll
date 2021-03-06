const motionsplan = require('../js/ideal-weight.js');
var assert = require('assert');

describe('IdealWeight', function() {
  describe('getIdealWeight()', function() {
    it('should return the correct number', function() {
      var hr = motionsplan.IdealWeight(180, "man");

      assert.equal(hr.getMiller(), 71.88000000000001);
      assert.equal(hr.getHamwi(), 77.68);
      assert.equal(hr.getDevine(), 75.48);
      assert.equal(hr.getRobinson(), 73);
    });
  });
});
