<template>
    <div id="overview">
        <day-select :selected="day"></day-select>
        <div class="main">
            <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
            <movie-filter></movie-filter>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    import daySelect from 'components/day-select.vue';
    import movieList from 'components/movie-list.vue';
    import movieFilter from 'components/movie-filter.vue';
    import { checkFilter, selectDay } from 'util/bus';

    export default {
        components: {
            daySelect,
            movieList,
            movieFilter,
        },
        props: [ 'movies' ],
        data() {
            return {
                genre: [],
                time: [],
                moment,
                day: moment()
            }
        },
        methods: {
        },
        created() {
            this.$bus.$on('check-filter', checkFilter.bind(this));
            this.$bus.$on('select-day', selectDay.bind(this));
        }
    }
</script>
<style>
</style>
