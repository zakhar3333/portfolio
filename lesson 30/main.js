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
    alert(`Obem =${a**3}` )
    alert(`Ploshad =${6*a**2}` )
}
function begining4 (){
    let a = Number(prompt('input number'))
    let b = Number(prompt('input number'))
    let c = Number(prompt('input number'))
    alert(`Obem =${a*b*c}` )
    alert(`Ploshad =${2*(a*b+b*c+a*c)}`)
}
function begining5 (){
    let L = Number(prompt('input number'))
    let R = L/2*3.14
    let P = 3.14*R**2
    alert(`radius =${R}`)
    alert(`ploshad =${P}`)
}

