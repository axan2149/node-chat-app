/**
 * Created by mrozycki on 4/20/2017.
 */

var generateMessage = (from, text) =>{
    "use strict";
    return {from, text, createdAt: new Date().getTime()};
};

var generateLocationMessage = (from, latitude, longitude) => {
    "use strict";
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    }
};

module.exports = {generateMessage, generateLocationMessage};