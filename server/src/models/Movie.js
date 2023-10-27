module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
    moviename: DataTypes.STRING,
    director: DataTypes.STRING,
    budget: DataTypes.STRING,
    money: DataTypes.STRING
    })
    return Movie
   }