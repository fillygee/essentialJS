
const functions = (start, stop, final) => {

while (start > stop) {
    console.log(start)
    start--
} if (start === stop) {
    console.log(final)
} else {
    console.log(start)
}

}
console.log(functions(10,5,"Blastoff!"))
