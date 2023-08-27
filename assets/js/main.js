/*show menu*/

const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')


/*menu show*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu' )
    })
}

/*remove menu mobile*/

const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
   const navMenu=document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
/*shadow header*/
const shadowHeader=()=>{
    const header = document.getElementById('header')

    this.scrollY >=50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)


/*email*/
const contactForm = document.getElementById("contact-form")
      contactMessage = document.getElementById('contact-message')
    
const sendMail=(e)=>{
    e.preventDefault()
    /* service-id template-id #form publickey*/ 
    emailjs.sendForm('service_24a214p','template_rwrprbg','#contact-form','bwWC33bfZmalMFAUv')
    .then(()=>{
        contactMessage.textContent= 'Message sent successfully'

        setTimeout(()=>{
            contactMessage.textContent = ''
        },5000)

        /*clear the fields*/
        contactForm.reset()
    },()=>{
        contactMessage.textContent = 'Message not sent (service error)'
    })
}      
contactForm.addEventListener('submit',sendMail)


/*show scrollup*/
const scrollup = ()=>{
    const scrollup = document.getElementById('scroll-up')

    this.scrollY>=350?scrollup.classList.add('show-scroll')
                     :scrollup.classList.remove('show-scroll')
                
}

window.addEventListener('scroll',scrollup);

const sections = document.querySelectorAll('section[id]')


const scrollActive=()=>{
    const scrolldown = window.scrollY
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
         sectionId = current.getAttribute('id'),
         sectionClass = document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']')

         if(scrolldown > sectionTop && scrolldown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
         }
         else{
            sectionClass.classList.remove('active-link')
         }
    })
}
window.addEventListener('scroll',scrollActive)

/*dark light mode*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

/*scroll reversal*/
const sr= ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home__perfil , .about__image,.contact__mail`,{origin:'right'})
sr.reveal(`.home__name,.home__info,
           .about__container .section__title-1,.about__info,
           .contact__social, .contact__data`,{origin:'left'})

sr.reveal(`.services__card, .projects__card`,{interval:100})

