//navbarfixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarfixed = header.offsetTop;
    const toTop = document.querySelector('#totop');

    if (window.pageYOffset){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}

//button humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click',function(){
    humberger.classList.toggle('active');
    navMenu.classList.toggle('hidden');
    
});

//Click Everywhere
window.addEventListener('click', function(a){
    if(a.target!=humberger && a.target !=navMenu){
        humberger.classList.remove('active');
        navMenu.classList.add('hidden');
    }
});

//Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//Change Button
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }