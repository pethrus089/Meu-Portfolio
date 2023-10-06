var tecnologias = document.getElementById('tecnologias');
var projetos = document.getElementById('projetos');
var contatos = document.getElementById('contatos');
var Pethrus = document.getElementById('Pethrus');

var sec_tecnologias = document.getElementById('sec_tecnologias')
var sec_projetos = document.getElementById('sec_projetos')
var sec_contatos = document.getElementById('sec_contatos')
var sec_Pethrus = document.getElementById('sec_Pethrus')
var menu1


tecnologias.addEventListener('click', function () {
    menu1 = document.getElementById('menu')
    var offsetY = sec_tecnologias.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom;
    scrollToSmoothly(offsetY, 1000);
    //console.log(offsetY)
});

projetos.addEventListener('click', function () {
    let x = 0
    do {
        menu1 = document.getElementById('menu')
        var offsetY = sec_projetos.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom;
        scrollToSmoothly(offsetY, 1000);
        console.log('passei')
        console.log(sec_projetos.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom);
        console.log(window.pageYOffset)
        x++
        // Using an anonymous function
        setTimeout(function () {
            menu1 = document.getElementById('menu')
            offsetY = sec_projetos.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom;
            scrollToSmoothly(offsetY, 1000);
            console.log('passei')
            console.log(sec_projetos.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom);
            console.log(window.pageYOffset)
        }, 100);

    } while (x < 8)
});

contatos.addEventListener('click', function () {
    menu1 = document.getElementById('menu')
    var offsetY = sec_contatos.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom;
    scrollToSmoothly(offsetY, 1000);
});

Pethrus.addEventListener('click', function () {
    menu1 = document.getElementById('menu')
    var offsetY = sec_Pethrus.getBoundingClientRect().top + window.pageYOffset - menu1.getBoundingClientRect().bottom;
    scrollToSmoothly(offsetY, 1000);
});

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
