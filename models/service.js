'use strict'


var db = require('../index'); 

var Service = {
    //function to query all items
    getAllItems: function () {
            var results = db.query('SELECT * from ??', [services], function (error, results, fields) {
                //if error, print blank results
                if (error) {
                    var apiResult = {};
                    
                    apiResult.meta = {
                        table: services,
                        type: "collection",
                        total: 0
                    }
                    //create an empty data table
                    apiResult.data = [];
                    return json(apiResult);
                    
                }
                
                //make results 
                var resultJson = JSON.stringify(results);
                resultJson = JSON.parse(resultJson);
                var apiResult = {};
    
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
    
    module.exports = Service;

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