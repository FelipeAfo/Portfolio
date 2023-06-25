
window.sr = ScrollReveal({ reset: true });

sr.reveal('.img-sobre', { duration: 2000})

sr.reveal('.sobre-texto', { duration: 2000})

sr.reveal('.h2-projeto', { duration: 2000})

sr.reveal('.todos-quadrados', { duration: 2000})

sr.reveal('#sobre img, h2', { duration: 2000})

window.sr = ScrollReveal({ reset: true });

sr.reveal('', {
  duration: 2000,
  origin: 'left',
  distance: '200px',
});
 // Obtenha todos os elementos com a classe .quadrado-habilidade
 

 let ul = document.querySelector('nav .ul');

 function openMenu(){
  ul.classList.add('open')
 }

 function closeMenu(){
  ul.classList.remove('open')
 }

 