import Vue from 'vue'
import Router from 'vue-router'
// Users
import MovieIndex from '@/components/Movie/Index'
import MovieCreate from '@/components/Movie/CreateMovie'
import MovieEdit from '@/components/Movie/EditMovie'
import MovieShow from '@/components/Movie/ShowMovie'
Vue.use(Router)
export default new Router({
 routes: [
 {
 path: '/movies',
 name: 'movies',
 component: MovieIndex
},
 {
  path: '/movie/create',
  name: 'movie-create',
  component: MovieCreate
  },
  {
  path: '/movie/edit/:movieId',
  name: 'movies-edit',
  component: MovieEdit
  },
  {
  path: '/movie/:movieId',
  name: 'movie',
  component: MovieShow
  }, 
  ]
 })
