<template>
    <div>
    <h1>Create Movie</h1>
    <form v-on:submit.prevent="createMovie">
    <p>MovieName: <input type="text" v-model="movie.moviename"></p>
    <p>Director: <input type="text" v-model="movie.director"></p>
    <p>Budget: <input type="text" v-model="movie.budget"></p>
    <p>Money Made: <input type="text" v-model="movie.money"></p>
    <p><button type="submit">create Movie</button></p>
    </form>
    </div>
   </template>
   <script>
   import MovieService from '@/service/MovieService'
   export default {
    data () {
    return {
    movie: {
    moviename: '',
    director: '',
    budget: '',
    money: '',
    }
    }
    },
    methods: {
    async createMovie () {
    try {
    await MovieService.post(this.movie)
    this.$router.push({
    name: 'movies'
    })
    } catch (err) {
    console.log(err)
    }
    }
    }
   }
   </script>
   <style scoped>
   </style>