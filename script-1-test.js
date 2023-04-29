const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: false,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name: "Donald",
        isStudent: false,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]


const users2 = [
    {
        id: 3,
        name: "Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]


const newUser = {
    id: 5,
    name: "Vladik",
    idStudent: true
}

const addUser = [...users, newUser]
//
// console.log(adduser)
//
// const concatUsers = [...users, ...users2]
// console.log(concatUsers)

// const changeUsers = addUser.map(user => {
//     if (user.name === "Bob") {
//         return {...user, name: "Vova"}
//     } else {
//         return user
//     }
// })
//
// console.log(changeUsers)

// const addSmth = addUser.map(user => ({...user, age: "18+"}))
//
// console.log(addSmth)
//
// const addAdress = addSmth.map(user => {
//     if (user.name === "Vladik") {
//         return {...user, adress: "Russia"}
//     } else {
//         return user
//     }
// })
//
// console.log(addAdress)

// const filteredUsers = addUser.filter(users => users.isStudent !== true)
// console.log(filteredUsers)






