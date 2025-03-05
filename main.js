const canvasEle = document.querySelector('#canvas');
const gridSizeEle = document.querySelector('#grid-size');
const btnEle = document.querySelector('button');

function updateGridSize() {
    gridSizeEle.setAttribute("value", gridSizeEle.value);
    console.log(gridSizeEle.getAttribute('value'))
    return gridSizeEle.getAttribute('value')
}

btnEle.addEventListener('click', function() {
    const userInput = updateGridSize();
    const totalPixels = userInput ** 2;
    canvasEle.innerHTML = '';

    for(let i = 0; i < totalPixels; i++) {
        canvasEle.innerHTML += '<div id="pixel"></div>'
    }

    const pixelEle = document.querySelectorAll('#pixel');
    pixelEle.forEach(pixel => {
        pixel.style.flex = `1 1 ${100 / userInput}%`;
    })

})


