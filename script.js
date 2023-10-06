const nav = window.document.getElementsByTagName('nav')[0]

const topoNav = nav.offsetTop;




window.onscroll=function(){
    fixarMenuNoTopo();
    /* retira000webhostapp(); */
}

window.onload=function(){
    fixarMenuNoTopo();
    /* retira000webhostapp(); */
}

function fixarMenuNoTopo(){
    if(window.pageYOffset >= 486){
        nav.classList.add('FixoNotTopo');
    }else{
        nav.classList.remove('FixoNotTopo');
    }
    /* console.log(window.pageYOffset) */
}

/* function retira000webhostapp(){
    var webhostapp = document.getElementsByTagName('div')
    webhostapp[(webhostapp.length-1)].style.display='none'
} */