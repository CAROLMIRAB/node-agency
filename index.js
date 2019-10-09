
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "local12345",
    database: "agency",
    port: 3306
});

connection.connect();

module.exports = connection;
/*
'use strict'

var mysql = require('mysql');
var app = require('./app');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "local12345",
    database: "agency",
    port: 3306
  });


con.connect(function(err){
        console.log("La conexión a la base de datos agency se ha realizado correctamente");
       if (err)  throw console.log(err);
    })
 
 module.exports = {'Conexion': con} */