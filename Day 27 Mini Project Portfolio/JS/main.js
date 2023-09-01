const titles = [{ icon: '💻', tile: 'Web Designer' }, { icon: '🌸', tile: 'UI/UX Designer' }, { icon: '🔗', tile: 'Web Developer' }]

const languages = ['Python',  'CSS','JavaScript' ]

const randomColor = () => {
    const string = '1234567890abcdef'
    let color = '#'
    for (let i = 0; i <= 5; i++) {
        const randomNumber = Math.floor(Math.random() * string.length)

        const letter = string.charAt(randomNumber)
        color += letter
    }
    return color
}


const slider = document.querySelector('.slider')
const tech = document.querySelector('.tech')
let index = 0

setInterval(() => {
    slider.innerHTML = ''
    const icon = document.createElement('h1')
    icon.setAttribute('id', 'icon')
    icon.innerHTML = titles[index].icon
    slider.appendChild(icon)
    const data = document.createElement('h1')
    data.innerHTML = titles[index].tile
    data.setAttribute('id', 'title')
    data.style.animation = 'animation: slide 1s ease alternate forwards'
    slider.appendChild(data)
    
    tech.innerHTML = ''
    const skill = document.createElement('h1')
    skill.setAttribute('id', 'text')
    skill.innerHTML = languages[index]
    skill.style.color = randomColor()
    tech.appendChild(skill)
    
    index++
    if(index == 3)
    index = 0

}, 2000);