import {Observable} from 'rxjs'

import {load, loadWithFetch, retryStrategy} from './loader'

// import {Observable} from 'rxjs/Observable'
// import "rxjs/add/operator/map"
// import "rxjs/add/operator/filter"

let numbers = [1, 5, 10]

/**

let source = Observable.create(Observer => {
  let index = 0;
  let prodeceValue = () => {
    Observer.next(numbers[index++])

    if(index < numbers.length) {
      setTimeout(prodeceValue, 250)
    }
    else {
      Observer.complete()
    }
  }

  prodeceValue()

}).map(n => n * 2)
  .filter(n => n > 4)

source.subscribe(
  v => console.log(`value: ${v}`),
  e => console.log(`error: ${e}`),
  () => console.log('complete')
)

*/


/**

let circle = document.getElementById("circle")
let source = Observable.fromEvent(document, 'mousemove')
.map((e : MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY
  }
})
.delay(100)

const onNext = value => {
  circle.style.left = value.x,
  circle.style.top = value.y
}

source.subscribe(
  onNext,
  e => console.log(`error: ${e}`),
  () => console.log('complete')
)

*/

/**

let output = document.getElementById("output")
let button = document.getElementById("button")

let click = Observable.fromEvent(button, "click")

const renderMovies = (movies) => {
  movies.forEach(m => {
      let div = document.createElement('div')
      div.innerText = m.title
      output.appendChild(div)
  })
}

// load("movies.json").subscribe(renderMovies)

click.flatMap(e => load("moviess.json"))
     .subscribe(
       renderMovies,
       e => console.log(`error: ${e}`),
       () => console.log('complete')
     )

*/


let output = document.getElementById("output")
let button = document.getElementById("button")

let click = Observable.fromEvent(button, "click")

const renderMovies = (movies) => {
  movies.forEach(m => {
      let div = document.createElement('div')
      div.innerText = m.title
      output.appendChild(div)
  })
}

let subscription = 
  load("movies.json").subscribe(
       renderMovies,
       e => console.log(`error: ${e}`),
       () => console.log('complete')
     )

click.flatMap(e => loadWithFetch("movies.json"))
     .subscribe(
       renderMovies,
       e => console.log(`error: ${e}`),
       () => console.log('complete')
     )
