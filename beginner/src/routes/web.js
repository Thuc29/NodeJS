
const express = require('express')
const router = express.Router();
const {getHomePage, postUpdateUser, postCreateUser, getCreatePage, getUpdatePage, postDeleteUser, postHandleRemoveUser} = require('../controllers/homeControllers')


router.get('/', getHomePage)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)



module.exports = router;