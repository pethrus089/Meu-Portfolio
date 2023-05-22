const nav = window.document.getElementsByTagName('nav')[0]

const topoNav = nav.offsetTop;




window.onscroll=function(){
    fixarMenuNoTopo();
    
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= 486){
        nav.classList.add('FixoNotTopo');
    }else{
        nav.classList.remove('FixoNotTopo');
    }
}