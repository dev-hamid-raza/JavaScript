const option = document.querySelector('select')
const button = document.querySelector('button')
const description = document.querySelector('.description')
const image = document.querySelector('img')
const parentDiv = document.querySelector('.image')
const input = document.querySelector('input')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
button.addEventListener('click' , () => {
    let result
    const calculation  = (gravity) => {
        const result = inputValue * gravity/9.8
        image.style.display = 'block'
        return result.toFixed(2)
    }
    const inputValue = parseInt(input.value)
    const selectedOption = option.value
    if(selectedOption === 'none' || isNaN(inputValue)) {
        if(isNaN(inputValue)) {
            h2.innerHTML = 'Please Enter Only Valid Value'
            h2.style.display = 'block'
            h3.style.display = 'none'
            image.style.display = 'none'
        } else {
            h2.innerHTML = 'Please Select the planet'
            h2.style.display =  'block'
            h3.style.display = 'none'
            image.style.display = 'none'
        }
    } else {
        
        switch (selectedOption) {
            case 'Earth':
                result = calculation(9.8)
                h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                h3.innerHTML = result
                h2.style.display = 'block'
                h3.style.display = 'flex'
                image.src = `images/${selectedOption}.png`
                break;
                case 'Mars':
                    result = calculation(3.71)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            case 'Jupiter':
                result = calculation(24.79)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            case 'Mercury':
                result = calculation(3.7)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            case 'Moon':
                result = calculation(1.62)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            case 'Neptune':
                result = calculation(11.15)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            case 'Pluto':
                result = calculation(0.62)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            case 'Saturn':
                result = calculation(10.44)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            case 'Uranus':
                result = calculation(8.7)
                h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                h3.innerHTML = result
                h2.style.display = 'block'
                h3.style.display = 'flex'
                image.src = `images/${selectedOption}.png`
                break;
            case 'Venus':
                result = calculation(8.7)
                    h2.innerHTML = `The Weight of the Object on <strong>Earth</strong>`
                    h3.innerHTML = result
                    h2.style.display = 'block'
                    h3.style.display = 'flex'
                    image.src = `images/${selectedOption}.png`
                break;
            default:
                break;
        }
        
    }

    

})