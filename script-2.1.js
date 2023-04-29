const names = ["Donald", "Alex", "Bob"]
console.log(names.sort())
//1. Сортирует строки "из коробки", т.е без доп параметров \\ тут - (По алфавиту)


const names_2 = ["Donald", "alex", "aLEX", "игорь", "Юрий"]
console.log(names_2.sort())
// 2. сортирует строки типа по "алфавиту" (unicode)

console.log(names)
//3. Работает мутабелльно (соритрует массив на месте)

console.log(names.sort() === names)
//4. Возвращает ссылку на исходный массив



const nums = [1000, 333, 9999, 77, -3]
console.log(nums.sort())
///5. Для всех остальных случаев необходимо параметром передать ф-цию сравнения (КОЛБЭК)

const compFunc = (a, b) => {         //по возрастанию
    if (a > b) {  // надо поменять местами
        return 10  // любое положительное число   -  даем сигнал
    } else {
        return -1 //  любое отрицательное число  -  даем сигнал
    }
}

console.log(nums.sort(compFunc))

console.log(nums.sort((a, b) => a - b ))  /// сокращ вариант
console.log(nums.sort((a, b) => b - a ))  /// сокращ вариант
console.log(nums.reverse())  /// перевернуть



const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
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
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

const sortByName = (a, b) => {
    if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return 10
    } else {
        return -10
    }
}


console.log(students.sort(sortByName))
console.log(students.sort((a, b)=>a.name.localeCompare(b.name))) // тоже самое
//8. Сортировка массива объектов по строковым значениям



console.log(students.sort((a, b)=>a.age - b.age))
//8. Сортировка массива объектов по числовым значениям

/////////// buble sort / сортировка пузырьками

const nums_2 = [100, 333, 999, 77, -3]

for (let j = 0; j < nums_2.length - 1; j++) {
    for (let i = 0; i < nums_2.length - 1 - j; i++) {
        if(nums_2[i] > nums_2[i + 1]){
            let temp = nums_2[i + 1]
            nums_2[i + 1] = nums_2[i]    // [nums_2[i], num_2[i+1]] = [nums_2[i+1], num_2[i+1]]
            nums_2[i] = temp
        }
    }
}
console.log(nums_2)
