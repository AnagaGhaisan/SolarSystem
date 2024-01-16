//navbarfixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarfixed = header.offsetTop;

    if (window.pageYOffset){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//button humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click',function(){
    humberger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
    
});
