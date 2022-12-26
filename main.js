// Define the classe of the mickey shape to make the transformitions on it
// git each element id to control it 
let mickey = document.getElementById('mickey')
let triangle = document.getElementById('triangle')
let triangle2 = document.getElementById('triangle2')
let frame = document.getElementById('frame')
let leftEar = document.getElementById('leftEar')
let rightEar = document.getElementById('rightEar')
let head = document.getElementById('head')
let left_face = document.getElementById('left_face')
let right_face = document.getElementById('right_face')
let left_cheek = document.getElementById('left_cheek')
let right_cheek = document.getElementById('right_cheek')
let chin = document.getElementById('chin')
let lip = document.getElementById('lip')
let left_line = document.getElementById('left_line')
let right_line = document.getElementById('right_line')
let mouth = document.getElementById('mouth')
let tong1 = document.getElementById('tong1')
let tong2 = document.getElementById('tong2')
let left_eye = document.getElementById('left_eye')
let right_eye = document.getElementById('right_eye')
let top_nose = document.getElementById('top_nose')
let nose = document.getElementById('nose')
let mouth_wrapper = document.getElementById('mouth_wrapper')
let cheeks = document.getElementById('cheeks')


/******************************************************************
 * Buttons
 *****************************************************************/
let transformButton = document.querySelector('.transformButton')
let scalingButton = document.querySelector('.scalingButton')
let rotatingButton = document.querySelector('.rotatingButton')


/******************************************************************
 * INPUT FIELDS
 *****************************************************************/

let up = document.querySelector('.up')
let left = document.querySelector('.left')
let rotate = document.querySelector('.rotate')
let scaleX = document.querySelector('.scaleX')
let scaleY = document.querySelector('.scaleY')

/******************************************************************
 * Comput the top and the left of the shapes
 * to change it when apply the translation function
 *****************************************************************/
let mickeyTop = parseInt(getComputedStyle(mickey).getPropertyValue('top'));
let mickeyLeft = parseInt(getComputedStyle(mickey).getPropertyValue('left'));
let triangleTop = parseInt(getComputedStyle(triangle).getPropertyValue('top'));
let triangleLeft = parseInt(getComputedStyle(triangle).getPropertyValue('left'));
let triangle2Top = parseInt(getComputedStyle(triangle2).getPropertyValue('top'));
let triangle2Left = parseInt(getComputedStyle(triangle2).getPropertyValue('left'));
let frameTop = parseInt(getComputedStyle(frame).getPropertyValue('top'));
let frameLeft = parseInt(getComputedStyle(frame).getPropertyValue('left'));
let leftEarTop = parseInt(getComputedStyle(leftEar).getPropertyValue('top'));
let leftEarLeft = parseInt(getComputedStyle(leftEar).getPropertyValue('left'));
let rightEarTop = parseInt(getComputedStyle(rightEar).getPropertyValue('top'));
let rightEarLeft = parseInt(getComputedStyle(rightEar).getPropertyValue('left'));
let headTop = parseInt(getComputedStyle(head).getPropertyValue('top'));
let headLeft = parseInt(getComputedStyle(head).getPropertyValue('left'));
let left_faceTop = parseInt(getComputedStyle(left_face).getPropertyValue('top'));
let left_faceLeft = parseInt(getComputedStyle(left_face).getPropertyValue('left'));
let right_faceTop = parseInt(getComputedStyle(right_face).getPropertyValue('top'));
let right_faceLeft = parseInt(getComputedStyle(right_face).getPropertyValue('left'));
let left_cheekTop = parseInt(getComputedStyle(left_cheek).getPropertyValue('top'));
let left_cheekLeft = parseInt(getComputedStyle(left_cheek).getPropertyValue('left'));
let right_cheekTop = parseInt(getComputedStyle(right_cheek).getPropertyValue('top'));
let right_cheekLeft = parseInt(getComputedStyle(right_cheek).getPropertyValue('left'));
let chinTop = parseInt(getComputedStyle(chin).getPropertyValue('top'));
let chinLeft = parseInt(getComputedStyle(chin).getPropertyValue('left'));
let tong2Left = parseInt(getComputedStyle(tong2).getPropertyValue('left'));
let left_eyeTop = parseInt(getComputedStyle(left_eye).getPropertyValue('top'));
let left_eyeLeft = parseInt(getComputedStyle(left_eye).getPropertyValue('left'));
let right_eyeTop = parseInt(getComputedStyle(right_eye).getPropertyValue('top'));
let right_eyeLeft = parseInt(getComputedStyle(right_eye).getPropertyValue('left'));
let top_noseTop = parseInt(getComputedStyle(top_nose).getPropertyValue('top'));
let top_noseLeft = parseInt(getComputedStyle(top_nose).getPropertyValue('left'));
let noseTop = parseInt(getComputedStyle(nose).getPropertyValue('top'));
let noseLeft = parseInt(getComputedStyle(nose).getPropertyValue('left'));
let mouth_wrapperTop = parseInt(getComputedStyle(mouth_wrapper).getPropertyValue('top'));
let mouth_wrapperLeft = parseInt(getComputedStyle(mouth_wrapper).getPropertyValue('left'));



/***************************************************************************
 * this function is used to change the top of the shape (on the Y direction) 
 ***************************************************************************/

function mickey_y_direction() {

    triangleTop -= +up.value
    triangle2Top -= +up.value
    frameTop -= +up.value
    leftEarTop -= +up.value
    rightEarTop -= +up.value
    headTop -= +up.value
    left_faceTop -= +up.value
    right_faceTop -= +up.value
    left_cheekTop -= +up.value
    right_cheekTop -= +up.value
    chinTop -= +up.value
    left_eyeTop -= +up.value
    right_eyeTop -= +up.value
    top_noseTop -= +up.value
    noseTop -= +up.value
    mouth_wrapperTop -= +up.value
}

/***************************************************************************
 * this function is used to change the top of the shape (on the X direction) 
 ***************************************************************************/

function mickey_x_direction() {
    // mickeyLeft += +left.value
    triangleLeft += +left.value
    triangle2Left += +left.value
    frameLeft += +left.value
    leftEarLeft += +left.value
    rightEarLeft += +left.value
    headLeft += +left.value
    left_faceLeft += +left.value
    right_faceLeft += +left.value
    left_cheekLeft += +left.value
    right_cheekLeft += +left.value
    chinLeft += +left.value
    left_eyeLeft += +left.value
    right_eyeLeft += +left.value
    top_noseLeft += +left.value
    noseLeft += +left.value
    mouth_wrapperLeft += +left.value
}

//on this function when we click on the translate button we call the function of 
//mickey_x_direction and mickey_y_direction and change the value of the translation  
//and add the value of the user translation input (x,y)

transformButton.onclick = function () {
    mickey_y_direction()
    mickey_x_direction()
    triangle.style.top = triangleTop + 'px'
    triangle.style.left = triangleLeft + 'px'
    triangle2.style.top = triangle2Top + 'px'
    triangle2.style.left = triangle2Left + 'px'
    frame.style.top = frameTop + 'px'
    frame.style.left = frameLeft + 'px'
    leftEar.style.top = leftEarTop + 'px'
    leftEar.style.left = leftEarLeft + 'px'
    rightEar.style.top = rightEarTop + 'px'
    rightEar.style.left = rightEarLeft + 'px'
    head.style.top = headTop + 'px'
    head.style.left = headLeft + 'px'
    left_face.style.top = left_faceTop + 'px'
    left_face.style.left = left_faceLeft + 'px'
    right_face.style.top = right_faceTop + 'px'
    right_face.style.left = right_faceLeft + 'px'
    left_cheek.style.top = left_cheekTop + 'px'
    left_cheek.style.left = left_cheekLeft + 'px'
    right_cheek.style.top = right_cheekTop + 'px'
    right_cheek.style.left = right_cheekLeft + 'px'
    chin.style.top = chinTop + 'px'
    chin.style.left = chinLeft + 'px'
    left_eye.style.top = left_eyeTop + 'px'
    left_eye.style.left = left_eyeLeft + 'px'
    right_eye.style.top = right_eyeTop + 'px'
    right_eye.style.left = right_eyeLeft + 'px'
    top_nose.style.top = top_noseTop + 'px'
    top_nose.style.left = top_noseLeft + 'px'
    nose.style.top = noseTop + 'px'
    nose.style.left = noseLeft + 'px'
    mouth_wrapper.style.top = mouth_wrapperTop + 'px'
    mouth_wrapper.style.left = mouth_wrapperLeft + 'px'
}


/***************************************************************************
 *the default values of scaling inputs
 ***************************************************************************/
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
    leftEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    leftEar.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    rightEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    rightEar.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    cheeks.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    cheeks.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    right_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    right_eye.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    left_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    left_eye.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    chin.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    chin.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    top_nose.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    nose.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    mouth_wrapper.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    mouth_wrapper.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    head.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    head.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    right_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    right_face.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    triangle2.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    triangle2.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    triangle.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    triangle.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    left_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    left_face.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    frame.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    frame.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`

    /*************************************************************************************
    *this conditions is used to make sure that the scaling values is more than one 
    *to guarantee that the shape will not disappear 
    **************************************************************************************/

    if (+scaleX.value > 0 && +scaleY.value <= 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(${+scaleX.value},1)`
        leftEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        leftEar.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        rightEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        rightEar.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        cheeks.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        cheeks.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        right_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_eye.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        left_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_eye.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        chin.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        chin.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        top_nose.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        nose.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        mouth_wrapper.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        mouth_wrapper.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        head.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        head.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        right_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_face.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        triangle2.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle2.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        triangle.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        left_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_face.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        frame.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        frame.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`

    }
    else if (+scaleX.value <= 0 && +scaleY.value > 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(1,${+scaleY.value} )`
        leftEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        leftEar.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        rightEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        rightEar.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        cheeks.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        cheeks.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        right_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_eye.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        left_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_eye.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        chin.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        chin.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        top_nose.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        nose.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        mouth_wrapper.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        mouth_wrapper.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        head.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        head.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        right_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_face.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        triangle2.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle2.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        triangle.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        left_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_face.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        frame.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        frame.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`


    }
    else if (+scaleX.value <= 0 && +scaleY.value <= 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(1,1 )`
        leftEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        leftEar.style.transform += `scale(1,1 )`
        rightEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        rightEar.style.transform += `scale(1,1 )`
        cheeks.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        cheeks.style.transform += `scale(1,1 )`
        right_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_eye.style.transform += `scale(1,1 )`
        left_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_eye.style.transform += `scale(1,1 )`
        chin.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        chin.style.transform += `scale(1,1 )`
        top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        top_nose.style.transform += `scale(1,1 )`
        nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        nose.style.transform += `scale(1,1 )`
        mouth_wrapper.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        mouth_wrapper.style.transform += `scale(1,1 )`
        head.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        head.style.transform += `scale(1,1 )`
        right_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_face.style.transform += `scale(1,1 )`
        triangle2.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle2.style.transform += `scale(1,1 )`
        triangle.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle.style.transform += `scale(1,1 )`
        left_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_face.style.transform += `scale(1,1 )`
        frame.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        frame.style.transform += `scale(1,1 )`
    }
}

//on this function when we click on the scale button we will change the value of the scaling 
//and add the value of the user scaling input

scalingButton.onclick = function () {

    mickey.style.transform = `scale(${+scaleX.value},${+scaleY.value})`
    mickey.style.transform += `rotate(${rotation}deg)`
    leftEar.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    leftEar.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    rightEar.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    rightEar.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    cheeks.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    cheeks.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    right_eye.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    right_eye.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    left_eye.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    left_eye.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    chin.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    chin.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    top_nose.style.transform += `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
    nose.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    nose.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    mouth_wrapper.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    mouth_wrapper.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    head.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    head.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    right_face.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    right_face.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    triangle2.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    triangle2.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    triangle.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    triangle.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    left_face.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    left_face.style.transform += `rotate(${rotation - mickey.style.transform}deg)`
    frame.style.transform = `scale(${+scaleX.value - mickey.style.transform},${+scaleY.value - mickey.style.transform})`
    frame.style.transform += `rotate(${rotation - mickey.style.transform}deg)`


    /*************************************************************************************
    *this conditions is used to make sure that the scaling values is more than one 
    *to guarantee that the shape will not disappear 
    **************************************************************************************/
    if (+scaleX.value > 0 && +scaleY.value <= 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(${+scaleX.value},1)`
        leftEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        leftEar.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        rightEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        rightEar.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        cheeks.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        cheeks.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        right_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_eye.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        left_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_eye.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        chin.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        chin.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        top_nose.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        nose.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        mouth_wrapper.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        mouth_wrapper.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        head.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        head.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        right_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_face.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        triangle2.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle2.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        triangle.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        left_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_face.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`
        frame.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        frame.style.transform += `scale(${+scaleX.value - mickey.style.transform},1)`

        alert("scale must be more than zero")

    }
    else if (+scaleX.value <= 0 && +scaleY.value > 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(1,${+scaleY.value} )`
        leftEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        leftEar.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        rightEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        rightEar.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        cheeks.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        cheeks.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        right_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_eye.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        left_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_eye.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        chin.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        chin.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        top_nose.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        nose.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        mouth_wrapper.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        mouth_wrapper.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        head.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        head.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        right_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_face.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        triangle2.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle2.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        triangle.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        left_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_face.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        frame.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        frame.style.transform += `scale(1,${+scaleY.value - mickey.style.transform})`
        alert("scale must be more than zero")


    }
    else if (+scaleX.value <= 0 && +scaleY.value <= 0) {
        mickey.style.transform = `rotate(${rotation}deg)`
        mickey.style.transform += `scale(1,1 )`
        leftEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        leftEar.style.transform += `scale(1,1 )`
        rightEar.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        rightEar.style.transform += `scale(1,1 )`
        cheeks.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        cheeks.style.transform += `scale(1,1 )`
        right_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_eye.style.transform += `scale(1,1 )`
        left_eye.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_eye.style.transform += `scale(1,1 )`
        chin.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        chin.style.transform += `scale(1,1 )`
        top_nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        top_nose.style.transform += `scale(1,1 )`
        nose.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        nose.style.transform += `scale(1,1 )`
        mouth_wrapper.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        mouth_wrapper.style.transform += `scale(1,1 )`
        head.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        head.style.transform += `scale(1,1 )`
        right_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        right_face.style.transform += `scale(1,1 )`
        triangle2.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle2.style.transform += `scale(1,1 )`
        triangle.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        triangle.style.transform += `scale(1,1 )`
        left_face.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        left_face.style.transform += `scale(1,1 )`
        frame.style.transform = `rotate(${rotation - mickey.style.transform}deg)`
        frame.style.transform += `scale(1,1 )`
        alert("scale must be more than zero")
    }
}
