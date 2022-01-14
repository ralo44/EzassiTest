const Ezassi = require('../models/ezassi')

//POST
//api/
exports.create = function (req, res) {
    const newData = new Ezassi(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Complete form' });
    } else {
        Ezassi.create(newData, function (err, ezassi) {
            if (err){
                res.send(err)
            }
            res.json({ error: false, message: "New data added!", data: ezassi });
        });
    }
}
//GET
//api/
exports.get = async function (req, res) {
    await Ezassi.get(function (err, ezassi) {
        console.log('controller');
        if (err) {
            res.send(err)
        }
    })
}
//UPDATE
//api/:id
exports.update = async function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
       await res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
       await Ezassi.update(req.params.id, new Ezassi(req.body), function (err, ezassi) {
            if (err){
                res.send(err);
            }
            res.json({ error: false, message: 'Employee successfully updated' });
        });
    }
};
//DELETE
//api/:id
exports.delete = function (req, res) {
    Ezassi.delete(req.params.id, function (err, ezassi) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Data deleted' });
    });
};
