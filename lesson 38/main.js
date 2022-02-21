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
    localStorage.setItem('new_users',JSON.stringify(users))
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
let loadUsers = () => {
    let loadedUsers = JSON.parse(localStorage.getItem('new_users'))
    console.log('loadedUsers',loadedUsers)
    
    let usersBlock = document.querySelector('.users')
    for (const user of loadedUsers) {
        usersBlock.insertAdjacentHTML('beforeend', `
            <div class="user">
                <div class="name">${user.name}</div>
                <div class="age">${user['age']}</div>
                <div class="gmail">${user.email}</div>
                <button onclick="changeColor()">Color</button>
            </div>
        `)        
        users.push(user)
    }    
}