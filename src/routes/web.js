
const express = require('express')
const router = express.Router();
const {getHomePage, getThuctd} = require('../controllers/homeControllers')


router.get('/', getHomePage)
router.get('/thuctd', getThuctd)

module.exports = router;