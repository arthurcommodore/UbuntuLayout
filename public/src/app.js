document.querySelector('#downArrow').onmousemove = showAllSoftware
document.querySelector('#downArrow').onmouseleave = deleteAll
document.querySelector('ul').onmousemove = noCan
document.querySelector('ul').onmouseleave = deleteAllUl

let can = true

function noCan() {
    can = false
    console.log(can)
}

function showAllSoftware(e) {
    e.preventDefault()
    const ul = document.querySelector('ul')
    ul.style.display = 'block'
}

function deleteAll(e) {
    console.log(can)
    setTimeout(() => {
        if(can) {
            e.preventDefault()
            const ul = document.querySelector('ul')
            ul.style.display = 'none'
        }
    }, 100)
}

function deleteAllUl(e) {
   can = true
    setTimeout(() => {
        if(can) {
            e.preventDefault()
            const ul = document.querySelector('ul')
            ul.style.display = 'none'
        }
    }, 100)
}