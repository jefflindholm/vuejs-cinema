import Vue from 'vue';
import VueRouter from 'vue-router';
import moment from 'moment-timezone';
import 'style.scss';
import routes from 'util/routes';
import tooltip from 'plugins/tooltip';

moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment }});

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', { get() { return this.$root.bus; } });

Vue.use(VueRouter);
const router = new VueRouter({ routes });

Vue.use(tooltip);

new Vue({
    el: '#app',
    data: {
        moment,
        bus,
        movies: [],
    },
    router,
    created() {
        setTimeout(() => {
            fetch('/api')
            .then(res => res.json())
            .then((res) => {
                this.movies = res
            })
            .catch(err => console.log(err));
        }, 1000);
    },
});
