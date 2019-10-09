
'use strict'

var mongoose = require('mongoose');

var app = require('./app');

var port = 27017;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/node-agency',  { useNewUrlParser: true })
    .then(() => {
       
        console.log("La conexión a la base de datos node-agency se ha realizado correctamente")

        app.listen(port, () => {
            console.log("servidor corriendo en localhost");
        });
    })
    
    .catch(err => console.log(err));