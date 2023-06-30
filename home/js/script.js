const navegação = document.querySelector('.navegação');
const menu = document.querySelector('.menu');
const html = document.querySelector('html');
const body = document.querySelector('body')
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const lista1 = document.querySelector('.lista1');
const lista2 = document.querySelector('.lista2');
const lista3 = document.querySelector('.lista3');
const lista4 = document.querySelector('.lista4');
const container = document.querySelector('.container');
const cima = document.querySelector('.fa-regular');
let timer;
let count = 1;
const menuativo = document.querySelector('.menu.ativo');

navegação.addEventListener('click', () =>{
    navegação.classList.toggle('ativo');
    menu.classList.toggle('ativo');
    document.querySelector('.lista1').classList.remove('donw')
    document.querySelector('.lista2').classList.remove('donw')
    document.querySelector('.lista3').classList.remove('donw')
    document.querySelector('.lista4').classList.remove('donw')
})

function meuEventoPC() {
    container.addEventListener('mouseover', () =>{
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
  }
  
  function isDispositivoMovel() {
    return ('ontouchstart' in window || navigator.maxTouchPoints);
  }
  
  if (!isDispositivoMovel()) {
    // Não é um dispositivo móvel (PC)
    meuEventoPC();
  }

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
}, 10000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}

function loading(){
    document.getElementsByClassName("caixa-load")[0].style.display = "none"
    document.getElementsByClassName("content")[0].style.display = "block"
}

function meuEventoPC() {
    // Adicione aqui seus eventos específicos para dispositivos de desktop (PC)
    // Exemplo:
    item1.addEventListener('click', () => {
      setTimeout(() => {
        lista1.classList.toggle('donw');
      }, 200);
    });
  
    item2.addEventListener('click', () => {
      setTimeout(() => {
        lista2.classList.toggle('donw');
      }, 200);
    });
  
    item3.addEventListener('click', () => {
      setTimeout(() => {
        lista3.classList.toggle('donw');
      }, 200);
    });
  
    item4.addEventListener('click', () => {
      setTimeout(() => {
        lista4.classList.toggle('donw');
      }, 200);
    });
  }
  
  meuEventoPC();
  
  meuEventoMobile();
  
  