const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  describe('Two Integers', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe('One round', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });
