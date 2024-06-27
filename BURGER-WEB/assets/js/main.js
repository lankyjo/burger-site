/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
navClose.addEventListener("click", removeMenu);

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");
function removeMenu() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", removeMenu));

/*=============== ADD SHADOW HEADER ===============*/
function shadowHeader() {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
}
window.addEventListener("scroll", shadowHeader);

/*=============== SHOW SCROLL UP ===============*/
const showScroll = ()=>{
    const scroll = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scroll.classList.add('show-scroll'):scroll.classList.remove('show-scroll') 
}
window.addEventListener('scroll', showScroll)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.home-data, .footer')
sr.reveal('.home-dish', {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal('.home-burger', {delay: 1200, distance: '100px', duration: 1500})
sr.reveal('.home-ingredients', {delay: 1000, interval: 200})
sr.reveal('.recipe-img, .delivery-img', {origin:'left'})
sr.reveal('.recipe-data, .delivery-data', {origin:'right'})
sr.reveal('.popular-card', {interval: 100, distance: "100px", duration: 2000})