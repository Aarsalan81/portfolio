const myName = 'امیرارسلان حبیب‌نژاد هستم'
const projects = [
    { id: 1, title: 'وبسایت nalingo', description: 'وبسایت آموزش آنلاین زبان ،', img: 'assets/images/nalingo.jpg', link: 'https://nalingo.com', isOnline: true, tools: ['react', 'tailwind'] },
    { id: 2, title: 'پنل مدیریت', description: 'پنل مدیریت آموزشگاه ،', img: 'assets/images/cms.jpg', link: 'https://github.com/Aarsalan81/school-management', isOnline: false, tools: ['react', 'MUI'] },
]
const menuBtnsWrapper = document.querySelector('.menu-btns-wrapper')
const showMenuBtn = document.getElementById('show-menu')
const closeMenu = document.getElementById('close-menu')
const menu = document.querySelector('.menu')
const typingEffectEl = document.querySelector('.typing-effect')
const showMenuBlur = document.querySelector('#show-menu-blur')
const projectsContainer = document.querySelector('.projects')
const home = document.getElementById('home')
const aboutMe = document.getElementById('about-me')
const skills = document.getElementById('skills')
const projectsTab = document.getElementById('projects')
const contactMe = document.getElementById('contact-me')
const links = document.querySelectorAll('.link')
const themeToggle = document.getElementById('theme-toggle')
const header = document.querySelector('header')
const contactMeBtn = document.getElementById('contact-me-btn')
const emalBox = document.getElementById('emal-box')
const callBox = document.getElementById('call-box')
const telegramBox = document.getElementById('telegram-box')
const instagramBox = document.getElementById('instagram-box')
const whatsappBox = document.getElementById('whatsapp-box')
const circulars = document.querySelectorAll('.circular')


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

    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark')
        circulars.forEach(c => {
            c.classList.remove('dark');
        });
    } else {
        html.classList.remove('dark')
        circulars.forEach(c => {
            c.classList.add('dark');
        });
    }

})


menuBtnsWrapper.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
    showMenuBtn.classList.toggle('hidden')
    closeMenu.classList.toggle('hidden')
    showMenuBlur.classList.toggle('show')
})

showMenuBlur.addEventListener('click', () => {
    menu.classList.remove('show-menu')
    showMenuBlur.classList.remove('show')
})


projects.forEach(proj => {
    let tools = ''
    proj.tools.forEach(tool => {
        tools += `<span class="project-tool">${tool}</span>`
    })
    projectsContainer.insertAdjacentHTML('beforeend', `
        <div data-aos="fade-up" class="project relative rounded-lg shadow-xl overflow-hidden">
            <img loading="lazy" src="${proj.img}" alt="image">
            <div class="project-title">${proj.title}</div>
            <div class="filter-hover">
                <p class="project-desc">
                    ${proj.description} ساخته شده با ابزار های :
                    </br>
                    <p class="project-tools">
                        ${tools}
                    </p>
                </p>
                <a href="${proj.link}" target="_blank" class="project-link">${proj.isOnline ? 'دیدن وبسایت' : 'بازدید در گیت هاب'}</a>
            </div>
        </div>
    `)

})

const handleScroll = (sectionId, word) => {
    if (sectionId === 'home-section') {
        window.scrollTo({ top: 0 })
    } else {
        const section = document.getElementById(sectionId)
        const headerHeight = document.querySelector('header').offsetHeight
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight

        window.scrollTo({ top: sectionPosition })
    }

    if (word !== 'btn') {
        menu.classList.remove('show-menu')
        showMenuBlur.classList.remove('show')
        showMenuBtn.classList.toggle('hidden')
        closeMenu.classList.toggle('hidden')
    }
}

themeToggle.addEventListener('click', () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    html.className.includes('dark') ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')

    circulars.forEach(c => {
        c.classList.toggle('dark');
    });
})

const handleLink = type => {
    if (type === 'email') {
        window.location.href = 'mailto:amir1381nezhadhabib@gmail.com'
    } else if (type === 'call') {
        window.location.href = 'tel:09362821560'
    } else if (type === 'telegram') {
        window.location.href = 'https://t.me/amarsln_h'
    } else if (type === 'instagram') {
        window.location.href = 'https://www.instagram.com/amarsln_h'
    } else if (type === 'whatsapp') {
        window.location.href = 'https://wa.me/09362821560'

    }
}

document.querySelectorAll('.typing').forEach(el => {
    const text = el.innerText;
    el.innerText = "";
    let i = 0;
    const interval = setInterval(() => {
        el.innerText += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, 100);
});


home.addEventListener('click', handleScroll.bind(null, 'home-section'))
aboutMe.addEventListener('click', handleScroll.bind(null, 'about-me-section'))
skills.addEventListener('click', handleScroll.bind(null, 'skills-section'))
projectsTab.addEventListener('click', handleScroll.bind(null, 'projects-section'))
contactMe.addEventListener('click', handleScroll.bind(null, 'contact-me-section'))
contactMeBtn.addEventListener('click', handleScroll.bind(null, 'contact-me-section', 'btn'))
emalBox.addEventListener('click', handleLink.bind(null, 'email'))
callBox.addEventListener('click', handleLink.bind(null, 'call'))
telegramBox.addEventListener('click', handleLink.bind(null, 'telegram'))
instagramBox.addEventListener('click', handleLink.bind(null, 'instagram'))
whatsappBox.addEventListener('click', handleLink.bind(null, 'whatsapp'))
