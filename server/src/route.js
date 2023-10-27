const movieController = require('./controllers/movieController')

module.exports = (app) =>{
    //get all movie
    app.get('/movies', movieController.index),

    //create
    app.post('/movie', movieController.create),

    //edit
    app.put('/movie/:movieId', movieController.put)

    //delete
    app.delete('/movie/:movieId', movieController.delete)
    
    //show by id
    app.get('/movie/:movieId', movieController.show)

}