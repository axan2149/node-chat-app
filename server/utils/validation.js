/**
 * Created by mrozycki on 4/21/2017.
 */

var isRealString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};