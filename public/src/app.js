const links = document.querySelectorAll("a")
const content = document.querySelector('#content')
const buttonBack = document.querySelector('#back')
const buttonNext = document.querySelector('#next')

const history = ['./home.html']
localStorage.setItem('history', JSON.stringify(history))

buttonBack.addEventListener('click', backEvent)
buttonNext.addEventListener('click', nextEvent)

let _countAtual = (JSON.parse(localStorage.getItem('history') ).length - 1)
let _countAnterior
let _countProx
let temp
let tempProx


links.forEach(link => {
    link.onclick = e => {
        e.preventDefault()
        
        temp = false
        document.querySelector('#topRated').style.display = 'none'
        
        const history = JSON.parse(localStorage.getItem('history') )
        _countAnterior = _countAtual 
        
        if(history.filter(link => link === link.href).length === 0) {
            history.push(link.href)
            localStorage.setItem('history', JSON.stringify(history))
            _countAtual = history.length - 1
            

        }else {
            history.forEach((link, i) => {
                if(link === link.href)
                    _countAtual = i
            })
        }

        content.classList.add('pre-animation')
        setTimeout(() => {
            content.classList.remove('pre-animation')
            fetch(link.href)
            .then(resp => resp.text())
            .then(text => content.innerHTML = text)
        }, 900)
 
    }
})


function backEvent() {
    const history = JSON.parse(localStorage.getItem('history') )
    temp ?
        _countAnterior--
    : temp = true

    if((_countAnterior) >= 0) {
        _countAtual = _countAnterior
        content.classList.add('pre-animation')
        setTimeout(() => {
            content.classList.remove('pre-animation')
            fetch(history[_countAnterior])
            .then(resp => resp.text())
            .then(text => content.innerHTML = text)
            .then(() => {
                if(history[_countAnterior] === './home.html') 
                    document.querySelector('#topRated').style.display = 'block'

            })
        }, 900)
    }
    
}


function nextEvent() {
    if(_countAtual + 1 <= (JSON.parse(localStorage.getItem('history')).length - 1) ){
        temp = false
        const history = JSON.parse(localStorage.getItem('history') )
        _countProx = (_countAtual + 1)
        _countAtual = _countProx
        content.classList.add('pre-animation')
        document.querySelector('#topRated').style.display = 'none'
        setTimeout(() => {
            content.classList.remove('pre-animation')
            fetch(history[_countProx])
            .then(resp => resp.text())
            .then(text => content.innerHTML = text)
    
        }, 900)
    }
}