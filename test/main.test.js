var assert = require('assert');
const holes = require("../main.js")

describe("testing holes function", function(){
    it("returns 1 when the input is 4", function(){
        var result = holes(4);
        assert.strictEqual(result,1);
    });
    it("returns 3 when the input is 3", function(){
        var result = holes(3);
        assert.strictEqual(result,3);
    });
    it("returns 1 when the input is 10", function(){
        var result = holes(10);
        assert.strictEqual(result,1);
    });
    it("returns 2 when the input is 8", function(){
        var result = holes(8);
        assert.strictEqual(result,2);
    });
    it("returns 4 when the input is -88", function(){
        var result = holes(-88);
        assert.strictEqual(result,4);
    });
    it("should throws error when the input is saya", function(){
        assert.throws(function () { holes("saya") }, Error, "Your input must be integer");
    });
});