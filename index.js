const img1 = document.querySelector("#img1")
const modal1 = document.querySelector(".img1")
const img2 = document.querySelector("#img2")
const modal2 = document.querySelector(".img2")
const img3 = document.querySelector("#img3")
const modal3 = document.querySelector(".img3")
const buttonClose1 = document.querySelector("#modalClose1")
const buttonClose2 = document.querySelector("#modalClose2")
const buttonClose3 = document.querySelector("#modalClose3")
const cmButton = document.querySelector('#CM')
const cmContent = document.querySelector('#comoFazer')
const inButton = document.querySelector('#IN')
const menuMobile = document.querySelector('#menuMobile')

img1.onclick = function (){
    modal1.showModal()
}
img2.onclick = function (){
    modal2.showModal()
}
img3.onclick = function (){
    modal3.showModal()
}
buttonClose1.onclick = function () {
    modal1.close()
    document.hasFocus()
}
buttonClose2.onclick = function () {
    modal2.close()
}
buttonClose3.onclick = function () {
    modal3.close()
}

function abrirFechar () {
    if (menuMobile.style.height === '70px'){
    menuMobile.style.height = '280px';
    }else {
        menuMobile.style.height = '70px';
    }
    
}

/*cmButton.onclick = function () {
    if (cmContent.style.display === 'block'){
        cmContent.style.display = 'none';
    }else{
        cmContent.style.display = 'block';
    }
}
inButton.onclick = function (){
    if (cmContent.style.display === 'block'){
        cmContent.style.display = 'none';
    }
}*/