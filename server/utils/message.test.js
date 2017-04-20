/**
 * Created by mrozycki on 4/20/2017.
 */

const expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
    "use strict";
    it('Should generate the correct message object', () => {
        //store res in variable
        // assert from match
        // assert text match
        // assert createdAt is a  number
        var from ='Bill';
        var text ='test message';


        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});
