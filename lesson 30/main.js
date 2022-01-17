// // let str = "Привет";
// // let str2 = 'Одинарные кавычки тоже подойдут';
// // let phrase = Обратные кавычки позволяют встраивать переменные ${str};

// // let name = "Иван";

// // // Вставим переменную
// // alert( Привет, ${name}! ); // Привет, Иван!

// // // Вставим выражение
// // alert( результат: ${1 + 2} ); // результат: 3


// // typeof undefined // "undefined"

// // typeof 0 // "number"

// // typeof 10n // "bigint"

// // typeof true // "boolean"

// // typeof "foo" // "string"

// // typeof Symbol("id") // "symbol"

// // typeof Math // "object"  (1)

// // typeof null // "object"  (2)

// // typeof alert // "function"  (3)

// // alert( Number("   123   ") ); // 123
// // alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// // alert( Number(true) );        // 1
// // alert( Number(false) );       // 0

// let body = document.querySelector('body')
// body.insertAdjacentHTML('afterbegin',`
//     <h1>Learning JavaScript</h1>
//     <h1>Learning JavaScript</h1>
// `)
// let mainHeading = document.querySelector('h1')
// let changeBTN = document.querySelector('button')

// mainHeading.style.color = 'blue'

// function changeColor () {
//     let red = Math.round(Math.random()*255)
//     // alert(red)
//     mainHeading.style.color = `rgb(${red},21,211)
//     mainHeading.style.fontSize = '50px'
//     changeBTN.innerHTML = mainHeading.style.color
// }

function begining1 (){
    let a = Number(prompt('input number'))
    alert(`Parametr =${a*4}` )
}
function begining2 (){
    let a = Number(prompt('input number'))
    alert(`Ploshad =${a**2}` )
}
function begining3 (){
    let a = Number(prompt('input number'))
    let O =a**3
    let P = 6*a**2
    alert(`Obem =${O}` )
    alert(`Ploshad =${P}` )
}
function begining4 (){
    let a = Number(prompt('input number'))
    let b = Number(prompt('input number'))
    let c = Number(prompt('input number'))
    let O = a*b*c
    let P = 2*(a*b+b*c+a*c)
    alert(`Obem =${O}` )
    alert(`Ploshad =${P}`)
}
function begining5 (){
    let L = Number(prompt('input number'))
    let R = L/2*3.14
    let P = 3.14*R**2
    alert(`radius =${R}`)
    alert(`ploshad =${P}`)
}
function begining6 (){
    let x1 = Number(prompt('input number'))
    let x2 = Number(prompt('input number'))
    R = Math.abs(x2-x1)
    alert(`rastoyanie =${R}`)   
}
function begining7 (){
    let x = Number(prompt('input number'))
    F = 3*x**6 - 6*x**2 -7
    alert(`Funkthiya =${F}`)
    
}
function begining8 (){
    let A = Number(prompt(`input number`))
    let B = Number(prompt(`input number`))
    let C = Number(prompt(`input number`))
    A = B
}


