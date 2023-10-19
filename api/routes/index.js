const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/movie', require('./movie'))
router.use('/auth', require('./auth.router'))




module.exports = router
