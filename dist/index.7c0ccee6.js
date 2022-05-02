canvas.onclick = (e)=>{
    console.log(e) // console.log 调试大法
    ;
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = e.clientX + 'px';
    div.style.top = e.clientY + 'px';
    div.style.width = '6px';
    div.style.height = '6px';
    div.style.marginLeft = '-3px';
    div.style.marginRight = '-3px';
    div.style.backgroundColor = 'black';
    canvas.appendChild(div);
    console.log('hi');
};

//# sourceMappingURL=index.7c0ccee6.js.map
