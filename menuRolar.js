var tecnologias = document.getElementById('tecnologias');
var projetos = document.getElementById('projetos');
var contatos = document.getElementById('contatos');
var Pethrus = document.getElementById('Pethrus');

var sec_tecnologias = document.getElementById('sec_tecnologias')
var sec_projetos = document.getElementById('sec_projetos')
var sec_contatos = document.getElementById('sec_contatos')
var sec_Pethrus = document.getElementById('sec_Pethrus')
var menu1 

tecnologias.addEventListener('click', function() {
    menu1 = document.getElementById('menu')
    if(menu1.getBoundingClientRect().top==0){
        var offsetY = sec_tecnologias.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom ;
    }else{
        var offsetY = sec_tecnologias.getBoundingClientRect().top + window.pageYOffset - menu1.offsetHeight;
    }
    scrollToSmoothly(offsetY, 1000); 
    console.log(menu1.offsetHeight)
});

projetos.addEventListener('click', function() {
    menu1 = document.getElementById('menu')
    var offsetY = sec_projetos.getBoundingClientRect().top + window.pageYOffset  - menu1.getBoundingClientRect().bottom ; 
    scrollToSmoothly(offsetY, 1000); 
});

contatos.addEventListener('click', function() {
    menu1 = document.getElementById('menu')
    console.log(menu1.this.getBoundingClientRect().top)
    var offsetY = sec_contatos.getBoundingClientRect().top + window.pageYOffset  - menu1.getBoundingClientRect().bottom ; 
    scrollToSmoothly(offsetY, 1000); 
});

Pethrus.addEventListener('click', function() {
    menu1 = document.getElementById('menu')
    console.log(menu1.this.getBoundingClientRect().top)
    var offsetY = sec_Pethrus.getBoundingClientRect().top + window.pageYOffset  - menu1.getBoundingClientRect().bottom ; 
    scrollToSmoothly(offsetY, 1000);  
});


/* 
//nova funcion
function chegaNoElemento(num){
    do {
        num = sec_Pethrus.getBoundingClientRect().top + window.pageYOffset  - menu1.getBoundingClientRect().bottom
        scrollToSmoothly(num, 1000); 
    } while (num=!sec_Pethrus.getBoundingClientRect().top + window.pageYOffset  - menu1.getBoundingClientRect().bottom)
}

 */


function scrollToSmoothly(targetY, duration) {
    const startingY = window.pageYOffset;
    const diffY = targetY - startingY;
    let startTime;

    function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startingY + diffY * progress);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}
