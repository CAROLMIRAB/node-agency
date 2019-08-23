
'use strict'

var mongoose = require('mongoose');

var app = require('./app');

var port = 3008;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin-mongo_13:19sxcGG0MbCE5bLx@cluster0-qpjgr.mongodb.net/test?retryWrites=true&w=majority',  { useNewUrlParser: true })
    .then(() => {
       
        console.log("La conexión a la base de datos curso_mean_social se ha realizado correctamente")

        app.listen(port, () => {
            console.log("servidor corriendo en atlas");
        });
    })
    
    .catch(err => console.log(err));