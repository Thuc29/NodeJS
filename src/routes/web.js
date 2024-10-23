
const express = require('express')
const router = express.Router();
const {getHomePage, getThuctd, postCreateUser} = require('../controllers/homeControllers')


router.get('/', getHomePage)
router.get('/thuctd', getThuctd)
router.post('/create-user',postCreateUser)

module.exports = router;