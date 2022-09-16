"use stricte";

// DECLARÇÕES DE VARIAVEIS

let tit=document.getElementById('texto');
let cxTexto=document.getElementById('idtexto');

tit.style.color='blue';
cxTexto.value='casa';

tit.innerHTML='Curso de JavaScript';
let paragrafo=document.getElementsByTagName('p');
paragrafo[0].style.color='blue';
document.write(paragrafo[2].innerHTML);

