<template>
    <div>
        <div id="title">
            <img src="/public/logo.png">
            <h1>Vue.js Cinema</h1>
        </div>
        <div id="overview">
            <div class="main">
                <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
                <movie-filter @filter-changed="filterChanged"></movie-filter>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    import movieList from './components/movie-list.vue';
    import movieFilter from './components/movie-filter.vue';

    export default {
        data() {
            return {
                genre: [],
                time: [],
                movies: [],
                moment,
                day: moment()
            }
        },
        methods: {
            filterChanged(category, title, checked) {
                console.log(category, title, checked)
                if (checked) {
                    this[category].push(title);
                } else {
                    const idx = this[category].indexOf(title);
                    if (idx != -1) {
                        this[category].splice(idx, 1);
                    }
                }
            },
        },
        components: {
            movieList,
            movieFilter,
        },
        created() {
            setTimeout(() => {
                fetch('/api')
                .then(res => res.json())
                .then((res) => {
                    this.movies = res
                })
                .catch(err => console.log(err));
            }, 1000);
        }
    }
</script>
<style>
</style>
