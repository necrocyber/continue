'use strict';

var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculando los test", function() {
    it("Testing the sum operation", function() {
        expect(calculator.Sum(10,8)).to.equal(10+8);
    });
});