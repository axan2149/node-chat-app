/**
 * Created by mrozycki on 4/20/2017.
 */
const path =require('path');

const publicPath = path.join(__dirname,'../public');

const express = require('express');

const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(PORT, () =>{
    "use strict";
    console.log(`starting server on port ${PORT}`);
});