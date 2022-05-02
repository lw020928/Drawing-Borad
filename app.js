let canvas = document.getElementById('canvas')
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
let ctx = canvas.getContext("2d")
ctx.fillStyle = 'black'
let painting = false
canvas.onmousedown = () => {
    painting = true
}
canvas.onmouseup = () => {
    painting = false
}
canvas.onmousemove = (e) => {
    if (painting === true) {
        // ctx.fillRect(e.clientX - 5, e.clientY - 5, 10, 10) // 绘制矩形
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 5, 0, 2 * Math.PI);
        ctx.fill()
    }
}