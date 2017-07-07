<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item
                :key="movie.id"
                v-for="movie in filteredMovies"
                :movie="movie.movie">
                <div class="movie-sessions">
                    <div class="session-time-wrapper tooltip-wrapper"
                        :key="idx"
                        v-for="(session, idx) in filteredSessions(movie.sessions)"
                        v-tooltip="{ seats: session.seats }"
                    >
                        <div class="session-time">{{ formatTime(session.time) }}</div>
                    </div>
                </div>
            </movie-item>
        </div>
        <div v-else-if="movies.length" class="no-results">
            No results for {{selectedGenres}}.
        </div>
        <div v-else class="no-results">
            Loading....
        </div>
    </div>
</template>
<script>
    import genres from 'util/genres';
    import times from 'util/times';
    import movieItem from './movie-item.vue';
    export default {
        components: {
            movieItem,
        },
        props: [
            'genre',
            'time',
            'movies',
            'day',
        ],
        methods: {
            movieGenreFilter(movie) {
                if (!this.genre.length) {
                    return true;
                }
                const movieGenres = movie.movie.Genre.split(', ');
                let matched = true;
                this.genre.forEach(g => {
                    if (movieGenres.indexOf(g) === -1) {
                        matched = false;
                    }
                })
                return matched;
            },
            movieTimeFilter(session) {
                if (!this.day.isSame(this.$moment(session.time), 'day')) {
                    return false;
                }
                if (this.time.length === 0 || this.time.length === 2) {
                    return true;
                }
                if (this.time[0] === times.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18;
                }
                return this.$moment(session.time).hour() < 18;
            },
            formatTime(time) {
                return this.$moment(time).format('h:mm A')
            },
            filteredSessions(sessions) {
                return sessions.filter(this.movieTimeFilter);
            },
        },
        computed: {
            filteredMovies() {
                return this.movies
                    .filter(this.movieGenreFilter)
                    .filter(movie => movie.sessions.find(this.movieTimeFilter))
            },
            selectedGenres() {
                return [...this.time, ...this.genre].join(', ')
            }
        }
    }
</script>
<style>
</style>
