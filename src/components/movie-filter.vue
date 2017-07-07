<template>
    <div id="movie-filter">
        <h2>Filter results</h2>
        <h3>By time of day</h3>
        <div class="filter-group">
            <check-filter :key="idx" v-for="(time, idx) in times" category="time" :title="time"></check-filter>
        </div>
        <h3>By genres</h3>
        <div class="filter-group">
            <check-filter :key="idx" v-for="(genre, idx) in genres" category="genre" :title="genre"></check-filter>
        </div>
    </div>
</template>
<script>
    import genres from 'util/genres';
    import times from 'util/times';
    import checkFilter from './check-filter.vue';
    export default {
        data() {
            return {
                genres,
                times,
            }
        },
        components: {
            checkFilter
        }
    }
</script>
<style>
</style>
