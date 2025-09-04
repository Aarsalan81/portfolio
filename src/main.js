const myName = 'امیرارسلان حبیب‌نژاد هستم'
const projects = [
    {id: 1, title: 'فروشگاه آنلاین', description: 'فروشگاه آنلاین کامل با React و Node.js', tools: ['vue', 'tailwind']},
    {id: 2, title: 'پلتفرم آموزش آنلاین', description: 'فروشگاه آنلاین کامل با React و Node.js', tools: ['react', 'tailwind']},
    {id: 3, title: 'اپلیکیشن تماشای فیلم', description: 'فروشگاه آنلاین کامل با React و Node.js', tools: ['react', 'tailwind']},
]
const showMenuBtn = document.getElementById('show-menu')
const menu = document.querySelector('.menu')
const typingEffectEl = document.querySelector('.typing-effect')
const showMenuBlur = document.querySelector('#show-menu-blur')
const projectsContainer = document.querySelector('.projects')
const home = document.getElementById('home')
const aboutMe = document.getElementById('about-me')
const projectsTab = document.getElementById('projects')
const contactMe = document.getElementById('contact-me')
const links = document.querySelectorAll('.link')
const themeToggle = document.getElementById('theme-toggle')
const header = document.querySelector('header')


window.addEventListener('scroll', () => {
    if(window.scrollY >= 30){
        header.style.backGround = 'blue'
    }
})

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement
    let index = 0
    const introducingMe = () => {
        if (index <= myName.length - 1) {
            typingEffectEl.textContent += myName[index]
            index++
        }
    
        setTimeout(introducingMe, 100)
    }
    
    introducingMe()

    localStorage.getItem('theme') === 'dark' ? html.className = 'dark' : localStorage.getItem('theme')
})


showMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
    showMenuBlur.classList.toggle('show')
})

showMenuBlur.addEventListener('click', () => {
    menu.classList.remove('show-menu')
    showMenuBlur.classList.remove('show')
})


projects.forEach(proj => {
    let tools = ''
    proj.tools.forEach(tool => {
        tools +=  `<span class="bg-light-primary dark:bg-dark-primary px-2 py-1 rounded">${tool}</span>`
    })
    projectsContainer.insertAdjacentHTML('beforeend', `
        <div data-aos="fade-up" class="project relative bg-light-card dark:bg-dark-card p-4 space-y-3 rounded-lg shadow-xl overflow-hidden">
            <div class="bg-light-primary dark:bg-dark-primary w-12 h-12 flex items-center justify-center rounded-lg">
              <img src="Assets/Icons/project-icon.svg" alt="icon">
            </div>
            <h3 class="font-bold text-lg text-light-text dark:text-dark-text">${proj.title}</h3>
            <p class="text-sm text-light-textSecondary dark:text-dark-textSecondary">${proj.description}</p>
            <div class="flex items-center gap-x-2 text-light-text dark:text-dark-text text-xs">
                ${tools}
            </div>
            <div class="filter-hover">
              <a href="#" class="bg-light-primary px-4 py-2 rounded-lg">دیدن سایت</a>
            </div>
        </div>
    `)

})

const handleScroll = sectionId => {
    const section = document.getElementById(sectionId)
    const headerHight = document.querySelector('header').offsetHeight
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerHight
    
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    })

    menu.classList.remove('show-menu')
    showMenuBlur.classList.remove('show')
}

themeToggle.addEventListener('click', () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    html.className.includes('dark') ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
})


home.addEventListener('click', handleScroll.bind(null, 'home-section'))
aboutMe.addEventListener('click', handleScroll.bind(null, 'about-me-section'))
projectsTab.addEventListener('click', handleScroll.bind(null, 'projects-section'))
contactMe.addEventListener('click', handleScroll.bind(null, 'contact-me-section'))


