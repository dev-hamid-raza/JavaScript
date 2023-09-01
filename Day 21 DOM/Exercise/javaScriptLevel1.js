const first = document.querySelector('p')

const firstPara = document.querySelector('#first-para')
const secondPara = document.querySelector('#second-para')
const thirdPara = document.querySelector('#third-para')
const fourthPara = document.querySelector('#fourth-para')
console.log(fourthPara)
const allPara = document.querySelectorAll('.paragraph')
allPara.forEach(para => {
    console.log(para.innerHTML)
})
allPara[3].innerHTML = 'HEllo Buddy'
allPara[0].setAttribute('class', 'text')
allPara[3].className = 'last-text'
allPara[3].id = 'last-id'
console.log(allPara)
