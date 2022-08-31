let boxLeft = document.querySelector('.box-left')
let green = document.querySelector('.green')
let silver = document.querySelector('.silver')
let gold = document.querySelector('.gold')
let graphite = document.querySelector('.graphite')
let blue = document.querySelector('.blue')
let boxLeft2 = document.querySelector('.box-left-2')
let boxLeft3 = document.querySelector('.box-left-3')
let boxLeft4 = document.querySelector('.box-left-4')
let boxLeft5 = document.querySelector('.box-left-5')

green.onclick = () => { 
    boxLeft.classList.add('box-left')
    boxLeft.classList.remove('box-left-5')
    boxLeft.classList.remove('box-left-4')
    boxLeft.classList.remove('box-left-3')
    boxLeft.classList.remove('box-left-2')
}

silver.onclick = () => { 
    boxLeft.classList.add('box-left-2')
    boxLeft.classList.remove('box-left')
    boxLeft.classList.remove('box-left-3')
    boxLeft.classList.remove('box-left-4')
    boxLeft.classList.remove('box-left-5')
}

gold.onclick = () => { 
    boxLeft.classList.add('box-left-3')
    boxLeft.classList.remove('box-left-2')
    boxLeft.classList.remove('box-left-4')
    boxLeft.classList.remove('box-left-5')
    boxLeft.classList.remove('box-left')
}


graphite.onclick = () => { 
    boxLeft.classList.add('box-left-4')
    boxLeft.classList.remove('box-left-3')
    boxLeft.classList.remove('box-left-5')
    boxLeft.classList.remove('box-left-2')
    boxLeft.classList.remove('box-left')
}

blue.onclick = () => { 
    boxLeft.classList.add('box-left-5')
    boxLeft.classList.remove('box-left-4')
    boxLeft.classList.remove('box-left-3')
    boxLeft.classList.remove('box-left-2')
    boxLeft.classList.remove('box-left')
}


let btn = document.querySelector('.button')
let closeBtn = document.querySelector('.cross')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')

function openModal() {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'

    setTimeout(() => {       
        modal.style.opacity = '1'
        modal_bg.style.opacity = '1'
        modal.style.transform = 'translate(-50%, -50%) scale(1)'
    }, 200)

}

btn.onclick = () => {
    openModal()
}

function closeModal() { 
    modal.style.opacity = '0'
    modal_bg.style.opacity = '0'
    modal.style.transform = 'translate(-50%, -50%) scale(.2)'
    
    setTimeout(() => {       
        modal.style.display = 'none'
        modal_bg.style.display = 'none'
    }, 200)

}

closeBtn.onclick = () => {
    closeModal()
}


// let cont = document.querySelector('.cont')
// let contAc = document.querySelector('.cont-active') 

document.querySelectorAll('.accardion').forEach((el) => {
    el.addEventListener('click', () => {
        let cont = el.nextElementSibling;
        console.log(cont)

        if(cont.style.maxHeight) {
            document.querySelectorAll('.cont').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.cont').forEach((el) => el.style.maxHeight = null)
            cont.style.maxHeight = cont.scrollHeight + 'px'
        }
    })
})