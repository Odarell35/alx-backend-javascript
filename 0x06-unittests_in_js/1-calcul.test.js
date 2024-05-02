const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM no Round', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber('SUM', 1, 4), 5);
    });
  });

  describe('SUM first round', function () {
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 2.4, 4), 6);
    });
  });
  
  describe('SUBTRACT no round', function () {
    it('should return 2', function () {
      assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -3', function () {
      assert.equal(calculateNumber('SUBTRACT', 2, 4.5), -3);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      assert.equal(calculateNumber('DIVIDE', 8, 4), 2);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber('DIVIDE', 9.5, 2), 5);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
