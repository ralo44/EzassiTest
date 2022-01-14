'use strict'
var connect = require('../config/db')//using conection data

//model
var Ezassi = function (ezassi) {
    this.asignee = ezassi.asignee;
    this.workflow = ezassi.workflow;
    this.score = ezassi.score;
    this.summary = ezassi.summary;
    this.user = ezassi.user;
    this.image = ezassi.image;
}

//Sql calls
Ezassi.get = function (result) {
    try {
        connect.query("Select * from ezassi ", function (err, res) {
            result(res)
            console.log(res);
        })
    } catch (err) {
        result(err)
        console.log('Error', err);
    }
}

Ezassi.create = function (newEmp, result) {
    try {
        connect.query("INSERT INTO ezassi set ?", newEmp, function (err, res) {
            console.log(res.insertId)
            result(null, res.insertId)
        })
    } catch (error) {
        console.log("error: ", err);
        result(err, null);
    }
}

Ezassi.update = function (id, ezassi, result) {
    try {
        connect.query("UPDATE ezassi SET asignee=?,workflow=?,score=?,summary=?,user=?,image=? WHERE id = ?",
            [ezassi.asignee, ezassi.workflow, ezassi.score, ezassi.summary, ezassi.user, ezassi.image, id], function (err, res) {
                result(null, res);
            })
    } catch (err) {
        console.log("error: ", err);
        result(null, err);
    }
}

Ezassi.delete = function (id, result) {
    try {
    connect.query("DELETE FROM ezassi WHERE id = ?", [id], function (err, res) {
        result(null, res);
    })
    } catch (err) {
        console.log("error: ", err);
        result(null, err);
    }
};

module.exports = Ezassi;