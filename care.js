window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
  //calc da linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados preciso

  // topo da seção
  const sectionTop = section.offsetTop
  // altura da seção
  const sectionHeight= section.offsetHeight
  //se ultrapassou a linha alvo ou não
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  
  //queryselector - pesquisa pelo seletor
  //const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0){
    navigation.classList.add('scroll')
} else {
    navigation.classList.remove('scroll')
}
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400){
    backToTopButton.classList.add('show')
} else {
    backToTopButton.classList.remove('show')
}
}

function openMenu() {
    document.body.classList.add('menu-expanded')
  }

function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }
  
  
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home img, #home .stats, #services, #services header, #servicer .card, #about, #about header, #about .content');
 //quando se usa ' ' não se pode pular linhas ao separar os objetos,
 //mas se no lugar usar ` ` isso possibilita a quebra de linhas