const nav = window.document.getElementsByTagName('nav')[0]
console.log(window.document.getElementsByTagName('nav'))
const topoNav = nav.offsetTop;
console.log(nav.offsetTop)

console.log(topoNav)

window.onscroll=function(){
    fixarMenuNoTopo();
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add('FixoNotTopo');
    }else{
        nav.classList.remove('FixoNotTopo');
    }
}