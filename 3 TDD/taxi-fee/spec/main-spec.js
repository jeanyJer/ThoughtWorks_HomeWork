"use strict"
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const taxiFee = require('../main/main');

describe('taxiFee', function () {
    // write your tests here...
    it("return 6 when the distance is less than 2km without waiting",function () {
        let distance = 1;
        let waiting = 0;
        let result=taxiFee(distance,waiting);
        expect(result).to.equal(6);
    });

    it("return the result when the distance is less than 2km with waiting",function () {
        let distance = 1;
        let waiting = 5;
        let result=taxiFee(distance,waiting);
        expect(result).to.equal(7);
    });

    it("return the result when the distance is more than 2km and less than 8km without waiting",function () {
        let distance = 5;
        let waiting = 0;
        let result=taxiFee(distance,waiting);
        expect(result).to.equal(8);
    });

    it("return the result when the distance is more than 2km and less than 8km with waiting",function () {
        let distance = 5;
        let waiting = 5;
        let result=taxiFee(distance,waiting);
        expect(result).to.equal(10);
    });

    it("return the result when the distance is more than 8km without waiting",function () {
        let distance = 10;
        let waiting = 0;
        let result=taxiFee(distance,waiting);
        expect(result).to.equal(13);
    });

    it("return the result when the distance is more than 8km with waiting",function () {
        let distance = 10;
        let waiting = 5;
        let result=taxiFee(distance,waiting);
        expect(result).to.equal(14);
    });
});
