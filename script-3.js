// если произойдет "то-то", выполни "это"
// "то-то" - событие
// "это" - функция
// callback => методы массивов. setTimeout & setInterval, обработка событий в браузере
//
// обработка событий в браузере => обработчик, слушатель, подписщик
// handler, listener, subscriber
// событие => создание объекта, который содержит сведения о событии => создает отчет о
// событии (объект): event, e, ev
// handler(event)
// event => объект стандартного вида для каждого типа события
//
//

const sm = document.getElementById("small")

const handler1 = (e) => {
    e.stopPropagation()
    alert("2th level medium")
}
const handler2 = () => {
    alert("3th level big!!")
}

sm.onclick = handler1
sm.onclick = null

/// добавление нескольких обработчиков
sm.addEventListener("click", handler1)
sm.addEventListener("click",handler2)
//sm.addEventListener("click",()=> alert("Hello vova")) //456
const handler3 = ()=>alert("hello vova")
sm.addEventListener("click", handler3)

sm.removeEventListener("click", handler1)
sm.removeEventListener("click", handler2)
sm.removeEventListener("click", handler3) ///#567

const handler4 = (e) => console.log(e.currentTarget)
// sm.addEventListener("click", handler4)

const md = document.getElementById("medium")
const bg = document.getElementById("big")

// md.addEventListener("click", handler1)
// bg.addEventListener("click", handler2)

// sm.addEventListener("click", (e)=>{
//     e.stopPropagation()       ///  отмена вызова остальных обработчиков - родителей
//     if(e.currentTarget.id === "small"){  /// (взаимодействие только с тем эл-том по которому кликнули)
//         alert("1st level yoyo!")
//     }
// })

// делигирование обработки события родительскому элементу
// теперь все клики по кнопкам обрабатывает один родитель - sm, а в нем уже лежат кнопки
sm.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON"){
        alert(e.target.id)
    }
})

const a = document.getElementById("a")

a.addEventListener("click", (e)=> {
    e.preventDefault()
    alert("YEEEEEEE")
})