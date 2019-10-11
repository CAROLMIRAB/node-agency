'use strict'
// Cargamos los modelos para usarlos posteriormente
var Service = require('../models/service');

// Conseguir datos de un usuario

var ServiceController = {
    
    getServices = (req, res) => {
        Service.getAllItems((err) => {
            if(err)return res.status(500).send({message: 'Error en la petición'});
            return res;
        })
    }
    
}

module.exports = ServiceController;