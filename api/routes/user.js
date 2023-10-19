const router = require('express').Router()

const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user')
const { checkAuth, checkAdmin } = require('../middleware/index')

router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/:id', checkAuth, checkAdmin, getOneUser)
router.post('/', checkAuth, createUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)
module.exports = router
