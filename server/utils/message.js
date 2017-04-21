/**
 * Created by mrozycki on 4/20/2017.
 */

const moment = require('moment');

var generateMessage = (from, text) =>{
    "use strict";
    return {from, text, createdAt: moment().valueOf()};
};

var generateLocationMessage = (from, latitude, longitude) => {
    "use strict";
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    }
};

module.exports = {generateMessage, generateLocationMessage};