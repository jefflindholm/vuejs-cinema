<template>
    <div id="day-select">
        <ul class="days">
            <li
            :class="{ day: true, active: isActive(day) }"
            :key="day"
            v-for="day in days"
            @click="selectDay(day)">
                {{ formatDay(day) }}
            </li>
            <li class="day-selector">
                <span class="dec" @click="changeDay(-1)"></span>
                <span class="inc" @click="changeDay(1)"></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['selected'],
    data() {
        return {
            days: [0, 1, 2, 3, 4, 5, 6].map(num => this.$moment().add(num, 'days')),
        }
    },
    methods: {
        formatDay(day) {
            if (day.isSame(this.$moment(), 'day')) {
                return 'Today';
            }
            return day.format('ddd MM/DD');
        },
        isActive(day) {
            return day.isSame(this.selected, 'day');
        },
        selectDay(day) {
            this.$bus.$emit('select-day', day);
        },
        changeDay(change) {
            const newDay = this.$moment(this.selected).add(change, 'days');
            if (this.days.find(day => newDay.isSame(day, 'day'))) {
                this.selectDay(newDay);
            }
        },
    },
}
</script>
<style>
</style>
