const { where } = require('sequelize')
const{Movie} = require('../models')
module.exports = {
  //get all movie
  async index (req, res) {
    try {
      const movies = await Movie.findAll()
      res.send(movies)
    } catch (error) {
      res.status(500).send({
         error: 'The moviesss information was incorrect'
        })
    }
   
  },

  //create movie
  async create(req, res) {
    try {
      const movie = await Movie.create(req.body)
      res.send(movie.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The create movie information was incorrect'
        })
    }
  },

  //edit movie
  async put(req, res) {
    try {
      await Movie.update(req.body,{
      where: {
        id: req.params.movieId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update movie information was incorrect'
        })
    }
  },

  // delete movie
  async delete(req, res) {
    try {
      const movie = await Movie.findOne({
        where: {
          id: req.params.movieId
        }
      })
      if (!movie) {
        return res.status(403).send({
          error: 'The movie id is not found'
        })
      }
      await movie.destroy()
      res.send(movie)
    } catch (error) {
      res.status(500).send({
        error: 'Delete movie information was incorrect'
       })
    }
  },

  // show movie by id
  async show (req, res) {
    try {
      const movie = await Movie.findOne({
        where: {
          id: req.params.movieId
        }
      })
      if (!movie) {
        return res.status(403).send({
          error: 'The movie id is not found'
        })
      }

      res.send(movie)
    } catch (error) {
      res.status(500).send({
        error: 'movie information was incorrect'
       })
    }
  }
}