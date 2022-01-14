'use strict'

const mysql = require('mysql')

const conectarDB =  mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'test',
        database : 'crud_ezassi'
})

conectarDB.connect(function(err){
    if(err) throw err
    console.log('BD connected');
})

module.exports = conectarDB