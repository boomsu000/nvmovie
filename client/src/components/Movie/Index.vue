<template>
    <div>
   <h2>Get All Movies</h2>
   <h4>จํานวนหนังทั้งหมด {{movies.length}} เรื่อง</h4><div><button @click="navigateTo('/movie/create')">เพื่มข้อมูล</button></div><hr>
   <div v-for="i in movies" v-bind:key="i.id">
    <p>id: {{ i.id }}</p>
    <p>MovieName: {{ i.moviename }}</p>
    <p>Director: {{ i.director }}</p>
    <p>Budget: {{ i.budget }}</p>
    <p>Money Made: {{ i.money }}</p>
    <div><button v-on:click="navigateTo('/movie/'+i.id)">ดูข้อมูล</button>
    <button @click="navigateTo('/movie/edit/'+i.id)">edit</button>
    <button @click="deleteMovie(i)">delete</button></div>
    <hr>
   </div>
    </div>
   </template>
   <script>
import MovieService from "@/service/MovieService";

export default {
  data() {
    return {
      movies: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteMovie(movie) {
      let result = confirm("Want of delete?");
      if (result) {
        try {
          await MovieService.delete(movie);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.movies = (await MovieService.index()).data;
    }
  },
  async created() {
    try {
      this.movies = (await MovieService.index()).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>