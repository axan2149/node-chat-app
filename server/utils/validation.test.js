/**
 * Created by mrozycki on 4/21/2017.
 */
const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () =>{
    "use strict";
    it('Should reject non-string values', () =>{
       var res = isRealString(98);
       expect(res).toBe(false);
    });
    it('Should reject string with only spaces', () =>{
        var res = isRealString('   ');
        expect(res).toBe(false);
    });
    it('Should allow string with non-space characters', () =>{
        var res = isRealString('   Andrew  ');
        expect(res).toBe(true);
    });
});
