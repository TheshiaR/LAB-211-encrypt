const router = require('express').Router()

const { getAllMovies, 
        getOneMovie, 
        createMovie, 
        updateMovie, 
        deleteMovie,
        getRatings } = require('../controllers/movie.controller')
        
router.get('/ratings', getRatings)
router.get('/', getAllMovies)
router.get('/:id', getOneMovie)
router.post('/', createMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie)




module.exports = router