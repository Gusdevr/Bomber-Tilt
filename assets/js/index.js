
//modal subscribe

const button = document.querySelector('h5')
const modal = document.querySelector('dialog')
const buttonClose = document.getElementById('modal-btn')
const x = document.getElementById('closeModal')

button.onclick = function() {
    modal.showModal()
}

buttonClose.onclick = function() {
    modal.close()

}

x.onclick = function() {
    modal.close()
   
}

function clickout (event) {
    if(event.target === this)
        modal.close(event)
}

modal.addEventListener('click', clickout)



//carrousel scroll

const images = [
    {'id': '1', 'url':'./assets/img/road1.png'}, 
    {'id': '2', 'url':'./assets/img/road2.png'},
    {'id': '3', 'url':'./assets/img/road3.png'},
    // {'id': '4', 'url':'./img/ippo.jpeg'},
   

]

const containerItens = document.querySelector('#container-itens')


const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>
        `
    })
}

loadImages(images, containerItens)

let itens = document.querySelectorAll('.item')

const previus = () => {
    containerItens.appendChild(itens[0])
    itens = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = itens[itens.length -1]
    containerItens.insertBefore( lastItem, itens[0])
}


document.querySelector('#container-itens').addEventListener('mousewheel', previus)
document.querySelector('#previus').addEventListener('click', previus)
document.querySelector('#next').addEventListener('click', next)
itens = document.querySelectorAll('.item')


