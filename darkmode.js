const darkMode = document.getElementById('mudar')
const menu = document.getElementById('menu')
const menuNome = document.querySelectorAll('nav a')
const body = document.getElementsByTagName('body')
const footer = document.getElementsByTagName('footer')
const h3 = document.querySelectorAll('h3')
const h4 = document.querySelectorAll('h4')
const ul = document.querySelectorAll('ul li a')
const textoExplicacao = document.querySelectorAll('.textoExplicacao')
const linkProjetos = document.querySelectorAll('#linksProjeto a')

darkMode.addEventListener('change', function () {
    if (darkMode.checked) {
        menu.style.backgroundColor = '#232323'
        for (let i = 0; i < menuNome.length; i++) {
            menuNome[i].style.color = '#fff';
        }
        body[0].style.backgroundColor = '#232323'
        body[0].style.color = '#fff'
        footer[0].style.backgroundColor = '#fff'
        footer[0].style.color = 'black'
        for (let i = 0; i < h3.length; i++) {
            h3[i].style.color = '#fff';
        }
        for (let i = 0; i < h4.length; i++) {
            h4[i].style.color = '#fff';
        }
        for (let i = 0; i < ul.length; i++) {
            ul[i].style.color = 'black';
        }
        for (let i = 0; i < textoExplicacao.length; i++) {
            textoExplicacao[i].style.color = '#fff';
        }
        for (let i = 0; i < linkProjetos.length; i++) {
            linkProjetos[i].style.color = '#fff';
        }
    } else {
        menu.style.backgroundColor = '#293f4826'
        for (let i = 0; i < menuNome.length; i++) {
            menuNome[i].style.color = '#000000';
        }
        body[0].style.backgroundColor = '#293f4826'
        body[0].style.color = '#232323db'
        footer[0].style.backgroundColor = '#232323'
        footer[0].style.color = 'rgb(201, 201, 201)'
        const h3 = document.querySelectorAll('h3');

        for (let i = 0; i < h3.length; i++) {
            h3[i].style.color = '#171717';
        }
        for (let i = 0; i < h4.length; i++) {
            h4[i].style.color = '#232323db';
        }
        for (let i = 0; i < ul.length; i++) {
            ul[i].style.color = 'rgb(201, 201, 201)';
        }
        for (let i = 0; i < textoExplicacao.length; i++) {
            textoExplicacao[i].style.color = '#232323db';
        }
        for (let i = 0; i < linkProjetos.length; i++) {
            linkProjetos[i].style.color = 'black';
          }
    }
});