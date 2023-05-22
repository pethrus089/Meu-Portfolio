// Definir funÃ§Ã£o que atualiza as dimensÃµes da tela

const div = window.document.getElementsByTagName('div')


function atualizarDimensoes() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    var p = window.document.getElementById('p')
    var h2 = window.document.getElementById('h2')
    var header = window.document.getElementById('he')
    var a = window.document.getElementsByTagName('a')
    var section = window.document.getElementsByClassName('principal')


    if (largura <= 650) {
        header.classList.add('pequeno')
        p.innerText = ''
        h2.style.textAlign='center'
        a[0].style.display ='none'
        a[1].style.float ='center'
        a[2].style.float ='center'
        a[3].style.float ='center'
        h2.style.textAlign='center'
        //section.style.display='block'
        
        //console.log(a)
    } else {
        p.innerText = 'Sou iniciante no mercado de trabalho. Busco uma oportunidade front-end.'
        header.classList.remove('pequeno')
        h2.style.textAlign='center'
        a[0].style.display ='block'
    }

}

// Chamar a funÃ§Ã£o quando a janela Ã© redimensionada
window.addEventListener("resize", atualizarDimensoes);