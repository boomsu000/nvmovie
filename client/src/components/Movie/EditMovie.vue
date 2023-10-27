<template>
    <div>
      <h1>Edit Movie</h1>
      <form v-on:submit.prevent="editUser">
        <p>MovieName: <input type="text" v-model="movie.moviename" /></p>
        <p>Director: <input type="text" v-model="movie.director" /></p>
        <p>Budget: <input type="text" v-model="movie.budget" /></p>
        <p>Money Made: <input type="text" v-model="movie.money" /></p>
        <p><button type="submit">Edit</button></p>
      </form>
      <hr />
      <div>
        <p>MovieName: {{ movie.moviename }}</p>
        <p>Director: {{ movie.director }}</p>
        <p>Budget: {{ movie.budget }}</p>
        <p>Money Made: {{ movie.money }}</p>
        <p></p>
      </div>
    </div>
  </template>
  <script>
  import MovieService from "@/service/MovieService";
  export default {
    data() {
      return {
        movie: {
          moviename: "",
          director: "",
          budget : "",
          money: "",
        }
      };
    },
    methods: {
      async editUser() {
        try {
          await MovieService.put(this.movie);
          this.$router.push({
            name: "movies"
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
    async created() {
      try {
        let movieId = this.$route.params.movieId;
        this.movie = (await MovieService.show(movieId)).data;
      } catch (error) {
        console.log(error);
      }
    }
  };
  </script>
  <style scoped></style>