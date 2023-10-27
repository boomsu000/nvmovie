   <template>
    <div>
   <h1>Show Movie By ID</h1>
   <p>id: {{ movie.id }}</p>
   <p>MovieName: {{ movie.moviename }}</p>
   <p>Director: {{ movie.director }}</p>
   <p>Budget: {{ movie.budget }}</p>
   <p>Money Made: {{ movie.money }}</p>
   <div><button @click="navigateTo('/movie/edit/'+movie.id)">edit</button>
   <button @click="navigateTo('/movies')">กลับ</button></div>
    </div>
   </template>
   <script>
  import MovieService from "@/service/MovieService";
  
  export default {
    data() {
      return {
        movie: null
      };
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      }
    },
    async created() {
      try {
        let movieId = this.$route.params.movieId;
        this.movie = (await MovieService.show(movieId)).data;
        console.log(this.movie);
      } catch (err) {
        console.log(err);
      }
    }
  };
  </script>
  
  <style></style>