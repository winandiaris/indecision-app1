import bagi, { square, add } from '../utils.js'
import isSenior, { isAdult, canDrink, old } from '../person.js'
import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'

console.log(validator.isEmail('test@gmail.com'))
console.log('app.js is running sekali')
console.log (square(10))
console.log (add(400,70))
console.log(bagi(9,7))

console.log(isAdult(12))
console.log(canDrink(40))
console.log(isSenior(65))
//old(90)

//Hasil di browser untuk sementara error karena belum instal babel
const template = <p>testing untumu rampal lan gumpal sak gusine njeblos lam lambemu kok lamis</p> 

//Hasil di browser muncul karena menggunakan format JSX
//const template2 = React.createElement('p', {}, 'testing')

ReactDOM.render(template, document.getElementById('app'))
