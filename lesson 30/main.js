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
function if1 (){
    let X= Number(prompt(`input number`))
    if(X > 0) {
        alert (X+1)
    } 
    else{
        alert(X)
    }
}
function if2 (){
    let X=Number(prompt(`input number`)) 
    if(X > 0) {
        alert (X+1)
    } 
    else if(X==0) {
        alert (X=10)
    } 
    else{
        alert(X-2)
    } 
}
function if3(){
    let X=Number(prompt(`imput number`))
    let Y=Number(prompt(`imput number`))
    if(X<Y){
        alert (Y)
        alert (X) 
    }
    rlthe
}
function Sign(X) {
    if (X < 0) {
        return -1
    } else if (X == 0) {
        return 0
    } else {
        return 1
    }
}
function function1(){
   
    
    let A = +prompt('Input A:')
    let B = +prompt('Input B:')
    console.log(Sign(A)+Sign(B))
}
function CircleS(R){
    return Math.PI*R**2
}
function function18(){
    let R= Number(prompt(`vedite radius`))
    let S = CircleS(R)
    alert (S)
}
function for1(){
    let N = +prompt('N=')
    let K = +prompt('K=')

    for (let i = 0; i < N; i++) {
        alert(i+' '+K)
    }
}
function for2(){
    let A = +prompt('A=')
    let B = +prompt('B=')

    for (let i = A; i<= B; i++) {
        alert(i)
        
    }
    alert(B-A+1)
}
function for3(){
    let A = +prompt('A=')
    let B = +prompt('B=')
    for (let i = 1;i <=10;i++){
        alert(i+'кг конфет = '+i*A)
    }
}
function Series1(){
        let mas = []
        for (let i = 0; i < 10;i++) {
            // let c = +prompt(Input ${i} element)
            let c =  Math.round(Math.random()*10)
            mas.push(c)
            // mas[i] = c
    
        }
        let sum = 0
        for (let i = 0; i < mas.length; i++) {
            sum += mas[i]
        }
        let sum2 = 0
        for (const iterator of mas) {
            sum2 += iterator
        }
        console.log(`Sum = ${sum}`)
        console.log(`Sum2 = ${sum2}`)
        console.log(mas)
    }

function Series2(){
        let mas = []
        for (let i=0;i<10;i++)  {
            mas[i] = (Math.random()*15)
        }
        let mas2 = []
        for (let i=0;i<mas.length;i++){
            mas2[i] = mas[i]%1
        }
        alert(mas2)

}







let Proc1 =  function () {
    let name = prompt('Input your name')
    localStorage.setItem('my name',name)
}

let getName = () => {
    let name = localStorage.getItem('my name')
    alert(name)
}

function getStorageKey() {
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
    }
}