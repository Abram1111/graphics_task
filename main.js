let circle = document.getElementById('mickey')
let transformButton = document.querySelector('.transformButton')
let rotatingButton = document.querySelector('.rotatingButton')
let up = document.querySelector('.up')
let left = document.querySelector('.left')
let rotate = document.querySelector('.rotate')
let scalingButton = document.querySelector('.scalingButton')
let scaleX = document.querySelector('.scaleX')
let scaleY = document.querySelector('.scaleY')

let circleTop = parseInt(getComputedStyle(circle).getPropertyValue('top'));
let circleLeft = parseInt(getComputedStyle(circle).getPropertyValue('left'));

function upCircle() {
    circleTop -= +up.value
}

function leftCircle() {
    circleLeft += +left.value
}

scaleX.value=+1
scaleY.value=+1
let rotation = 0;
rotatingButton.onclick = function () {
    rotation = (rotation + +rotate.value) % 360
    circle.style.transform = `rotate(${rotation}deg)`
    circle.style.transform += `scale(${+scaleX.value},${+scaleY.value})`
}

scalingButton.onclick = function () {
    circle.style.transform = `scale(${+scaleX.value},${+scaleY.value})`
    circle.style.transform += `rotate(${rotation}deg)`
}
transformButton.onclick = function () {
    upCircle()
    leftCircle()
    circle.style.top = circleTop + 'px'
    circle.style.left = circleLeft + 'px'
}