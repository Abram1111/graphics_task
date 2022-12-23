// Define the classe of the mickey shape to make the transformitions on it

let mickey = document.getElementById('mickey')

// define the button and the inputs that are used to make the translation on the shape

let transformButton = document.querySelector('.transformButton')
let up = document.querySelector('.up')
let left = document.querySelector('.left')

// define the button and the inputs that are used to make the rotation on the shape

let rotatingButton = document.querySelector('.rotatingButton')
let rotate = document.querySelector('.rotate')

// define the button and the inputs that are used to make the scalling on the shape

let scalingButton = document.querySelector('.scalingButton')
let scaleX = document.querySelector('.scaleX')
let scaleY = document.querySelector('.scaleY')


//comput the top and the left of the shape to change it when apply the translation function

let mickeyTop = parseInt(getComputedStyle(mickey).getPropertyValue('top'));
let mickeyLeft = parseInt(getComputedStyle(mickey).getPropertyValue('left'));

//this function is used to change the top of the shape (on the Y direction) 

function mickey_y_direction() {
    mickeyTop -= +up.value
}

//this function is used to change the left of the shape (on the X direction) 

function mickey_x_direction() {
    mickeyLeft += +left.value
}

//on this function when we click on the translate button we call the function of 
//mickey_x_direction and mickey_y_direction and change the value of the translation  
//and add the value of the user translation input (x,y)

transformButton.onclick = function () {
    mickey_y_direction()
    mickey_x_direction()
    mickey.style.top = mickeyTop + 'px'
    mickey.style.left = mickeyLeft + 'px'
}

//the default values of scaling inputs

scaleX.value = +1
scaleY.value = +1

// we define varaible of the rotation value 
let rotation = 0;

//on this function when we click on the rotate button we will change the value of the rotation 
//and add the value of the user rotation input

rotatingButton.onclick = function () {
    rotation = (rotation + +rotate.value) % 360
    mickey.style.transform = `rotate(${rotation}deg)`
    mickey.style.transform += `scale(${+scaleX.value},${+scaleY.value})`


    if (+scaleX.value <= 0 || +scaleY.value <= 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(1,1)`
    }
}

//on this function when we click on the scale button we will change the value of the scaling 
//and add the value of the user scaling input

scalingButton.onclick = function () {
    mickey.style.transform = `scale(${+scaleX.value},${+scaleY.value})`
    mickey.style.transform += `rotate(${rotation}deg)`

    //this conditions is used to make sure that the scaling values is more than one 
    //to guarantee that the shape will not disappear 

    if (+scaleX.value <= 0 || +scaleY.value <= 0) {
        mickey.style.transform += `scale(1,${+scaleY.value})`
        mickey.style.transform = `rotate(${rotation}deg)`
        alert()
    }
    else if (+scaleX.value > 0 && +scaleY.value <= 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(1,1)`
        alert()
    }
    else if (+scaleX.value <= 0 && +scaleY.value > 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(1,1)`
        alert()
    }
}
