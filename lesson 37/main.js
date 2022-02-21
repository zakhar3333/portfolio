// let user = {
//     name: "Dmytro"
// }
// user.age = 36

// console.log('user',user)

// for (let key in user) {
//     console.log(key,user[key])
// }
// delete user.age
// console.log('user',user)

let users = []

let changeColor = function () {
    let userColor = document.querySelectorAll('.user')

    for (let user of userColor) {
        let red = Math.round(Math.random()*255)
        let green = Math.round(Math.random()*255)
        let blue = Math.round(Math.random()*255)
        user.style.background = `rgb(${red},${green},${blue})`
    }
}

let createUser = () => {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let email = document.getElementById('email').value

    let user = {
        name,
        age,
        email,
    }
    users.push(user)
    console.log(users)
    let usersBlock = document.querySelector('.users')
    usersBlock.insertAdjacentHTML('beforeend', `
        <div class="user">
            <div class="name">${user.name}</div>
            <div class="age">${user['age']}</div>
            <div class="age">${user.email}</div>
            <button onclick="changeColor()">Color</button>
        </div>
    `)
}