//////примитивы:
//////number, string, boolean, null, undefined, NaN, Symbol, BigInt


/////объекты:
////object, array => данные
// function

// чем объекты и массивы отличаются от примитива?
// - более сложная структура
// - имеют св-ва и методы
// - ссылочный тип данных
//
//
//

/// можно и так: new Object() №123 -> ссылка на оюъект
const user1 = {  ///
    name: "bob",
    age: 24,
    isDone: true
}   /// литерал один из способов дать инструкциюб на создание обьекта

const user2 = user1  //// -- 2 переменные хранят ссылку на один и тот-же объект

//// object.create или new object   -   как создать новый объект

// const user1Copy = {
//     name: user1.name,
//     age: user1.age,
//     isDone: user1.isDone
// }
//
//
// console.log(user1 === user1Copy)

const user1Copy = {...user1} /// spred , создание нового объекта, перенос всех значений

user1Copy.name = "Alex"  /////изменили имя, но в user1 ничего не поменялось

const users = [
    {
        id: 1,
        name:"Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name:"Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name:"Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name:"Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]

const users2 = [
    {
        id: 1,
        name:"Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name:"Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    }
    ]

const usersCopy = [...users]


//// в реакте - делаем копию = вносим измениния = используем копию с
// измениниями ( тригерим реакт что-то делать )
// c(r)ud

const newUser = {
    id: 5,
    name: "John",
    idStudent: true
}

const addUser = [...users, newUser]  /// добавляем нового юзера/сущность, а можно и push()
// addUser.push(newUser)


const concatUsers = [...user1, ...user2] /// создали копию и совместили 2 массива в один
// users.concat(users2)


const upd1Users = addUser.map(user => {   //// изменяем значение в обьекте (кот находится в массиве)
    if (user.name === "John") {
        return {...user, isStudent: false}
    } else {
        return user
    }
})     /// => []

/////добавляем новое свойство всем объектам
const upd2Users = upd1Users.map(user => ({...user, isMarried: true}))

console.log(upd2Users)


///////удаление

const deleteUsers = upd2Users.filter(user => user.id !== 5)   // возвращает новый массив с новым наполнением если пройдена проверка (true)