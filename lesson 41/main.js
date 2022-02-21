let btnCreate = document.querySelector('.btn--create')
let btnClear = document.querySelector('.btn--cleare')

let container = document.querySelector('.container')
let inputWidth = document.getElementById('width')
let inputHeight = document.getElementById('height')

let newBlock

let cordLeft
let cordTop

btnCreate.addEventListener('click', () => {
    let iWidth = inputWidth.value
    let iHeight = inputHeight.value
    cordLeft = 0
    cordTop = 0
    newBlock = document.createElement('div')
    newBlock.style.width = iWidth + 'px'
    newBlock.style.height = iHeight + 'px'
    newBlock.style.border = '2px solid red'
    
    newBlock.style.position = 'absolute'
    container.prepend(newBlock)
})

btnClear.addEventListener('click', clearBlock)

function clearBlock () {
    newBlock.remove()
}   

let btnTop = document.querySelector ('.btn--top')
let btnBottom = document.querySelector ('.btn--bottom')
let btnLeft = document.querySelector ('.btn--left')
let btnRight = document.querySelector ('.btn--right')

btnTop.addEventListener('click', moveTop)
btnBottom.addEventListener('click', moveBottom)
btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)

function moveTop () {
    cordTop-=10
    
    newBlock.style.top = cordTop +'px';
}
function moveBottom () {
    cordTop+=10
    newBlock.style.top = cordTop +'px';
}
function moveLeft () {
    cordLeft-=10
    newBlock.style.left = cordLeft +'px';
}
function moveRight () {
    cordLeft+=10
    newBlock.style.left = cordLeft +'px';
}