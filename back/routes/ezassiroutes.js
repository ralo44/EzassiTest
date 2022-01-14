const express = require('express')
const router = express.Router()
const ezassiContoller = require('../controllers/ezassicontroller')

router.get('/', ezassiContoller.get)
router.post('/', ezassiContoller.create)
router.delete('/:id', ezassiContoller.delete)
router.put('/:id', ezassiContoller.update)

module.exports = router