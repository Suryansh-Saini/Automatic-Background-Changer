const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let generateColor = '#'
    for (let i = 0; i < 6; i++) {
        generateColor += hex[Math.floor(Math.random() * 16)]
    }
    return generateColor
}
let start
const startInteral = function () {
    if (!start) {
        start = setInterval(function () {
            document.body.style.backgroundColor = randomColor()
        }, 1000)
    }
}
const stopInterval = function () {
    clearInterval(start)
    start = null
}
document.getElementById('start').addEventListener('click', startInteral)
document.getElementById('stop').addEventListener('click', stopInterval)