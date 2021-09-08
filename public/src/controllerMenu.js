let _can = true

const downArrowAll = document.querySelector('#downArrowAll')
const downArrowInstalled = document.querySelector('#downArrowInstalled')
const menuCategorias = document.querySelector('#menuSoftware')
const menuInstalled = document.querySelector('#menuInstalled')

downArrowAll.onmousemove = showAll('#menuSoftware')
downArrowAll.onmouseleave = deleteAll(undefined, '#menuSoftware')
downArrowInstalled.onmousemove = showAll('#menuInstalled')
downArrowInstalled.onmouseleave = deleteAll(undefined, '#menuInstalled')

menuCategorias.onmousemove = setCan(false)
menuCategorias.onmouseleave = deleteAll(setCan(true), '#menuSoftware')
menuInstalled.onmousemove = setCan(false)
menuInstalled.onmouseleave = deleteAll(setCan(true), '#menuInstalled')

function setCan(value) {
    return function() {
        _can = value
    }
}

function showAll(menu) {
    return function(e) {
        e.preventDefault()
        const ul = document.querySelector(menu)
        ul.style.display = 'block'
    }
  
}

function deleteAll(changeCan, menu) {
    return function(e) {
        if(changeCan) {
            changeCan()
        }
            

        setTimeout(() => {
            if(_can) {
                e.preventDefault()
                const ul = document.querySelector(menu)
                ul.style.display = 'none'
            }
        }, 100)
    }
}
