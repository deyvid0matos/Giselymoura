// MENU MOBILE - AÇÃO
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




// SEÇÕES DE ROLAGEM - COR DO NOME
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach ( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // SEÇÕES 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 10);
    // REMOVER O ICONE DE MENU MOBILE
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// SCROLL REVEAL 
ScrollReveal({ 
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .servicos-container, .portifolio-box, .contato form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .sobre-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .sobre-content', {origin: 'right'});

//EFEITO DE DIGITANDO
const typed = new Typed('.multiple-text', {
    strings: ['Psicóloga.', 'Terapeuta comportamental e Psicanalista.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});