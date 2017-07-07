<template>
    <div id="detail">
        <movie-item v-if="movie" :movie="movie">
            <div class="movie-details">
                <p class="movie-gen">{{ movie.Genre }}</p>
                <p class="movie-plot">{{ movie.Plot }}</p>
                <table>
                    <tr> <td>Release date:</td> <td>{{ movie.Released}}</td> </tr>
                    <tr> <td>Running time:</td> <td>{{ movie.Runtime}}</td> </tr>
                    <tr> <td>Director:</td> <td>{{ movie.Director}}</td> </tr>
                    <tr> <td>Cast:</td> <td>{{ movie.Actors}}</td> </tr>
                </table>
            </div>
        </movie-item>
        <div class="home">
            <router-link :to="{ name: 'home' }">Back to results</router-link>
        </div>
    </div>
</template>
<script>
    import movieItem from 'components/movie-item.vue';
    export default {
        components: {
            movieItem,
        },
        props: ['movies'],
        computed: {
            movie() {
                const movie = this.movies.find(movie => movie.movie.imdbID == this.$route.params.id);
                return movie ? movie.movie : null;
            }
        },
        created() {
            console.log(this.$route.params.id);
        }
    }
</script>
<style>
</style>
