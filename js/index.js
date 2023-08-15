const displayValorActual = document.getElementById("valor-actual");
const displayValorAnterior = document.getElementById("valor-anterior");
const btnNumeros = document.querySelectorAll('.numero')
const btnOperadores = document.querySelectorAll('.op');

const display = new Display(displayValorAnterior, displayValorActual);


btnNumeros.forEach(boton => {
    boton.addEventListener('click', ()=>{
        display.agregarNumero(boton.innerHTML)
    })
})

btnOperadores.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        display.computar(boton.value);
    })
})

const calculadora = document.querySelector('.calculadora')
const themeDark = document.querySelector('.body')
const sideBarDFark = document.querySelector('.header')
const themeToggle = document.querySelector('.lbl-switch')

themeToggle.onclick = () =>{
    calculadora.classList.toggle('dark')
    themeDark.classList.toggle('dark')
    sideBarDFark.classList.toggle('dark')
}



