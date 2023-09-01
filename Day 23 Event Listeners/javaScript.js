const button = document.querySelector('.button')
button.addEventListener('click', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
})

button.addEventListener('mouseenter', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
})

button.addEventListener('dblclick', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
    )
    console.log("double Clicked")
})



const clickMe = () => {
    alert('We can attach event on HTML element')
}


const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button1 = document.querySelector('#button')

let bmi
button1.addEventListener('click', () => {
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})


const input = document.querySelector('#say')
const p = document.querySelector('p')

input.addEventListener('input', e => {
    p.textContent = e.target.value
})

const input2 = document.querySelector('#input2')
const p2 = document.querySelector('#p2')

input2.addEventListener('blur', (e) => {
    p2.textContent = 'Field is required'
    p2.style.color = 'red'

})

document.body.addEventListener('keypress', e => {
    alert(e.keyCode)
})