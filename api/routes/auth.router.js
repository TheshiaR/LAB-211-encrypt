const router = require('express').Router()

const { signup } = require('../controllers/auth.contoller')
const { login } = require('../controllers/auth.contoller')

        
router.post('/signup', signup)
router.post('/login', login)



module.exports = router