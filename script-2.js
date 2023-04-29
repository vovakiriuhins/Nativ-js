let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getName = st => st.name
const getNames = (array) => {
    const result = []
    const getName = st => st.name
    for (let i = 0; i < array.length; i++) {
        const newValue = getName(array[i])
        result[i] = newValue
    }
    return result
}


const getScores = (array) => {
    const result = []
    const getStudentScores = st => st.scores
    for (let i = 0; i < array.length; i++) {
        const newValue = getStudentScores(array[i])
        result[i] = newValue
    }

    return result
}

const sMap = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i])
        result[i] = newValue
    }

    return result
}

console.log(students.map(getName))
console.log(sMap(students, getName))


/////c => [...st, newSt]
/////r => map (obj => JSX elements)
/////u => map (conditional maping: obj => updObj)
/////d => filter
///////////////////////////////////////////////////////////////
/////   filter/////////////////////////////////////////////////

// const sFilter = (array, func) => {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         if(func(array[i]) === true) {
//             result.push([i])
//         }
//     }
//
//     return result
// }
// console.log(sFilter(sudents, st=>st.scores >= 100))
// console.log(sudents.filter (st=>st.scores >= 100))

///find, push, join
let arr1 = [1, 2, 3, 4]
const sPop = (array) => {
return array.length

}

console.log(sPop(arr1))


///В Array.prototype лежат все методы массивов



