canvas.onclick = (e) => {
    console.log(e) // console.log 调试大法
    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.left = e.clientX + 'px'
    div.style.top = e.clientY + 'px'
    div.style.width = '12px'
    div.style.height = '12px'
    div.style.marginLeft = '-6px'
    div.style.marginTop = '-6px'
    div.style.backgroundColor = 'black'
    div.style.borderRadius = '50%'
    canvas.appendChild(div)
}