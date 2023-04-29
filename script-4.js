const  td_1 = "qw-34"
const  td_2 = "er-65"





const todoList = [
    {
        id: td_1,
        title: "what to learn",
        filter: "all",
    },
    {
        id: td_2,
        title: "what to buy",
        filter: "all",
    },
]

const tasks = {
    [td_1]: [       // ключ "qw-34" - для связи
        {id: 1, title: "HTML", isDone: false},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "JS/TS", isDone: false},
    ],
    [td_2]: [
        {id: 4, title: "Bread", isDone: false},
        {id: 5, title: "Milk", isDone: false},
        {id: 6, title: "Chicken", isDone: false},
    ]
}

console.log(tasks[td_1])
console.log(tasks[td_1].filter(t => t.id !== 2)) /// remove
console.log([...tasks[td_1], {id: 10, title: "new Task", isDone: false}]) // add task

const addTodolist = (title) => {
    const td_id = "wh-66"
    const newTodo = {
        id: td_id,
        title: title,
        filter: "all",
    }
    const updatedTodos = [...todoList, newTodo]
    console.log(updatedTodos)

    const copyTasks = {...tasks, [td_id] : []}
    console.log(copyTasks)
}

addTodolist("What to drink tonight")


const result = array = [2,4,5,3]
/// acc - 0
array.reduce((acc, el) => {  ////=>acc + el, 0
    return acc + el
}, 0)
//0,2 = 2
//2,4 = 6
//6,5 ==11
//11,3 = 14
//result = 14

const max = array.reduce((acc, el)=>{  ////=>acc >= el ? acc : el
    if (acc >= el) {
        return acc
    } else {
        return el
    }
})
//2, 4 = 4
//4, 5 = 5
//5, 3 = 5
//max = 5


let students = [
    {   id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

const names = students.map(st=>st.name)

const rNames = students.reduce((newArr, el)=>{
    newArr.push(el.name)
    return newArr
}, [])