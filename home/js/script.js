const navegação = document.querySelector('.navegação');
const menu = document.querySelector('.menu');
const html = document.querySelector('html');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const lista1 = document.querySelector('.lista1');
const lista2 = document.querySelector('.lista2');
const lista3 = document.querySelector('.lista3');
const lista4 = document.querySelector('.lista4');
const cima = document.querySelector('.fa-regular');
let timer;
let count = 1;
const menuativo = document.querySelector('.menu.ativo');

navegação.addEventListener('click', () =>{
    navegação.classList.toggle('ativo');
    menu.classList.toggle('ativo');
})

html.addEventListener('click', () =>{
    document.querySelector('.lista1').classList.remove('donw')
    document.querySelector('.lista2').classList.remove('donw')
    document.querySelector('.lista3').classList.remove('donw')
    document.querySelector('.lista4').classList.remove('donw')
})

item1.addEventListener('mouseover', () =>{
    lista1.classList.toggle('donw')
    document.querySelector('.lista2').classList.remove('donw')
    document.querySelector('.lista3').classList.remove('donw')
    document.querySelector('.lista4').classList.remove('donw')
})

item2.addEventListener('mouseover', () =>{
    lista2.classList.toggle('donw')
    document.querySelector('.lista1').classList.remove('donw')
    document.querySelector('.lista3').classList.remove('donw')
    document.querySelector('.lista4').classList.remove('donw')
})

item3.addEventListener('mouseover', () =>{
    lista3.classList.toggle('donw')
    document.querySelector('.lista1').classList.remove('donw')
    document.querySelector('.lista2').classList.remove('donw')
    document.querySelector('.lista4').classList.remove('donw')
})

item4.addEventListener('mouseover', () =>{
    lista4.classList.toggle('donw')
    document.querySelector('.lista1').classList.remove('donw')
    document.querySelector('.lista2').classList.remove('donw')
    document.querySelector('.lista3').classList.remove('donw')
})
function exibirBotão() {
    cima.classList.add('visivel');
    clearTimeout(timer);
    timer = setTimeout(() => {
      cima.classList.remove('visivel');
    }, 2000);
  }

window.addEventListener('scroll', () =>{
    exibirBotão()
})

setInterval( function(){
    nextImage();
}, 8000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}