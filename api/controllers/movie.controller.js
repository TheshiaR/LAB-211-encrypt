const Movie = require('../models/movie.model')

async function getAllMovies(req, res) {
    try {
        const queryParams = req.query
        const movies = await Movie.findAll() 
        const filteredMovies = movies.filter(movie => {
            for (const key in queryParams) {
              if (movie[key] !== queryParams[key]) {
                return false;
              }
            }
            return true;
          });
        if (movies) {
            return res.status(200).json(filteredMovies)
        } else {
            return res.status(404).send('No movies found')
        }
    } catch (error) {
        res.status(500).send(error.mensaje)
    }
}

async function getOneMovie(req, res) {
    try {
		const movie = await Movie.findByPk(req.params.id)
		if (movie) {
			return res.status(200).json(movie)
		} else {
			return res.status(404).send('Movie not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}


async function createMovie(req, res) {
	try {
		const movie = await Movie.create(req.body)
		return res.status(200).json({ message: 'Movie created', movie: movie })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateMovie(req, res) {
	try {
		const [movieExist, movie] = await Movie.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (movieExist !== 0) {
			return res.status(200).json({ message: 'Movie updated', movie: movie })
		} else {
			return res.status(404).send('Movie not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteMovie(req, res) {
	try {
		const movie = await Movie.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (movie) {
			return res.status(200).json('Movie deleted')
		} else {
			return res.status(404).send('Movie not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function getRatings(req, res) {
	try {
		const ratings = await Movie.findAll()
		if (ratings) {
            return res.status(200).json(ratings)
        } else {
            return res.status(404).send('No ratings found')
        }
	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
    getAllMovies,
	getOneMovie,
	createMovie,
	updateMovie,
	deleteMovie,
	getRatings
}