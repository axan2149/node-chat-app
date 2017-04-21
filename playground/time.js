/**
 * Created by mrozycki on 4/21/2017.
 */
var date = new Date();

console.log(date.getMonth());

const moment = require('moment');

var date2 = moment();

console.log(date2);

console.log(date2.format('MMM Do YYYY hh:mm:ss'));

console.log(date2.format('h:mm a'));