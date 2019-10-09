'use strict'


var db = require('../index'); 

var User = {
    //function to query all items
    getAllItems: function () {
            var results = db.query('SELECT * from ??', [usuarios], function (error, results, fields) {
                //if error, print blank results
                if (error) {
                    var apiResult = {};
                    
                    apiResult.meta = {
                        table: usuarios,
                        type: "collection",
                        total: 0
                    }
                    //create an empty data table
                    apiResult.data = [];
                    
                    //send the results (apiResult) as JSON to Express (res)
                    //Express uses res.json() to send JSON to client
                    //you will see res.send() used for HTML
                    return json(apiResult);
                    
                }
                
                //make results 
                var resultJson = JSON.stringify(results);
                resultJson = JSON.parse(resultJson);
                var apiResult = {};
    
                    
               // create a meta table to help apps
               //do we have results? what section? etc
                apiResult.meta = {
                    table: section,
                    type: "collection",
                    total: 1,
                    total_entries: 0
                }
                apiResult.data = resultJson;
                
                return json(apiResult);
            });
        },
    };
    
    module.exports = User;

/*const conexion = require("../index");
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
    name: String,
    surname: String,
    nick: String,
    email: String,
    password: String,
    role: String, 
    image: String
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('User', UserSchema);*/