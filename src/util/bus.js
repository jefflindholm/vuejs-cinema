export function checkFilter(category, title, checked) {
    if (checked) {
        this[category].push(title);
    } else {
        const idx = this[category].indexOf(title);
        if (idx != -1) {
            this[category].splice(idx, 1);
        }
    }
}
export function selectDay(day) {
    this.day = day;
}

