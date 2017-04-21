/**
 * Created by mrozycki on 4/20/2017.
 */

const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


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

describe('generateLocationMessage', () => {
    "use strict";
   it('Should generate the correct Location message object', () => {
       var from ='Bill';
       var lat = '41.6428472';
       var long ='-72.4591102';
       var url =`https://www.google.com/maps?q=${lat},${long}`;
       var locationMessage= generateLocationMessage(from, lat, long);
       expect(locationMessage).toInclude({from, url});
   })
});