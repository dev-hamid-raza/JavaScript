const paraList = document.querySelectorAll('.paragraph')
console.log(paraList)
paraList[0].style.color = 'red'
paraList[1].style.color = 'green'
paraList[2].style.color = 'pink'
paraList[3].style.color = 'blue'


paraList.forEach((para, i) => {
    para.style.fontSize = '32px'
    if (i % 2 === 0) {
        para.style.backgroundColor = 'Grey'
    } else {
        para.style.backgroundColor = 'aqua'
    }
})

paraList.forEach(para => {
    para.innerHTML = `Hi, I'm Hamid Raza`
})