

const loop = () => {
 for (let i = 1 ; i < 30 ;i++) {
    if (i > 20) {
        console.log('X')
    } else if (i >= 20) {
        console.log('x')
    } else if (i < 10) {
        console.log('.')
    }
 }

}

console.log(loop());
