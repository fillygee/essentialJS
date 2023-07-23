
const conundrum = (num) => {
    if ( num === 7) {
        return 'Exact'
    } else if (num >= 11) {
        return 'High'
    } else if ( num >= 3) {
        return 'Medium'
    } else if (num < 3) {
        return 'Low'
    }
}

console.log(conundrum(1));

