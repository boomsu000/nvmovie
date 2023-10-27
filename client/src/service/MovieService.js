import Api from '@/service/Api'

export default {
    index (search){
        return Api().get('movies')
    },
    show (movieId){
        return Api().get('movie/'+movieId)
    },
    post (movie){
        return Api().post('movie',movie)
    },
    put (movie){
        return Api().put('movie/'+movie.id, movie)
    },
    delete (movie){
        return Api().delete('movie/'+movie.id, movie)
    }
}