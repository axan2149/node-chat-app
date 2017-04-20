/**
 * Created by mrozycki on 4/20/2017.
 */

var generateMessage = (from, text) =>{
    "use strict";
    return {from, text, createdAt: new Date().getTime()};
};

module.exports = {generateMessage};