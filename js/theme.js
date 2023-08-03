const toggleThemeBtn = document.getElementById('themetoggle')

const offcanvas = document.querySelector('.offcanvas')
const closeBtn = document.querySelector('.btn-close')
const navbarBottom = document.querySelector('#navbar-bottom')

const brightnessLabel = document.querySelector('#brightness-label')
const saturationLabel = document.querySelector('#saturation-label')
const blurLabel = document.querySelector('#blur-label')
const inversionLabel = document.querySelector('#inversion-label')
const contrastLabel = document.querySelector('#contrast-label')
const grayscaleLabel = document.querySelector('#grayscale-label')
const hueRotateLabel = document.querySelector('#hue-rotate-label')
const sepiaLabel = document.querySelector('#sepia-label')
const imgTheme = document.querySelector('#imgTheme')
const themeTitle = document.querySelector('#theme-title')
const faq = document.querySelector('#faq')
const contact = document.querySelector('#contact')
const logoIcon = document.querySelector('#logo-icon')
const effectsNav = document.querySelector('#effects')
const presetsNav = document.querySelector('#presets')
const settingsNav = document.querySelector('#settings')
const applyVflipNav = document.querySelector('#applyVflip')
const applyHflipNav = document.querySelector('#applyHflip')
const rotate = document.querySelector('#rotate')
const imageArea = document.querySelector('#image-area')
// const userLabel = document.querySelector('#userLabel')


toggleThemeBtn.addEventListener('click', () => {
    if (navbarBottom.classList.contains('bg-light')) setLightMode()
    else setDarkMode()
})

if (localStorage.theme == 'dark') setDarkMode()
if (localStorage.theme == 'light') setLightMode()

function setDarkMode() {
    imgTheme.src = './styles/images/moon.svg'
    logoIcon.src = './styles/images/logo-dark.svg'
    themeTitle.innerText = 'Dark'


    navbarBottom.classList.add('bg-light')
    navbarBottom.classList.remove('navbar-dark')
    navbarBottom.classList.remove('bg-dark')
    offcanvas.classList.remove('text-bg-dark')
    closeBtn.classList.remove('btn-close-white')

    brightnessLabel.classList.remove('tool-label')
    brightnessLabel.classList.add('tool-darklabel')
    saturationLabel.classList.remove('tool-label')
    saturationLabel.classList.add('tool-darklabel')
    blurLabel.classList.remove('tool-label')
    blurLabel.classList.add('tool-darklabel')
    inversionLabel.classList.remove('tool-label')
    inversionLabel.classList.add('tool-darklabel')
    contrastLabel.classList.remove('tool-label')
    contrastLabel.classList.add('tool-darklabel')
    grayscaleLabel.classList.remove('tool-label')
    grayscaleLabel.classList.add('tool-darklabel')
    hueRotateLabel.classList.remove('tool-label')
    hueRotateLabel.classList.add('tool-darklabel')
    sepiaLabel.classList.remove('tool-label')
    sepiaLabel.classList.add('tool-darklabel')
    effectsNav.classList.add('bottomNav-light')
    effectsNav.classList.remove('bottomNav')
    presetsNav.classList.add('bottomNav-light')
    presetsNav.classList.remove('bottomNav')
    settingsNav.classList.add('bottomNav-light')
    settingsNav.classList.remove('bottomNav')
    applyVflipNav.classList.add('bottomNav-light')
    applyVflipNav.classList.remove('bottomNav')
    applyHflipNav.classList.add('bottomNav-light')
    applyHflipNav.classList.remove('bottomNav')
    rotate.classList.add('bottomNav-light')
    rotate.classList.remove('bottomNav')
    faq.classList.add('navbar-nav-light')
    faq.classList.remove('navbar-nav')
    contact.classList.add('navbar-nav-light')
    contact.classList.remove('navbar-nav')
    imageArea.classList.add('image-area-light')
    imageArea.classList.remove('image-area')
    userLabel.classList.add('userLabel-light')
    
    localStorage.theme = 'dark'
}

function setLightMode() {
    imgTheme.src = './styles/images/sun.svg'
    logoIcon.src = './styles/images/logo-light.svg'
    themeTitle.innerText = 'Light'


    navbarBottom.classList.remove('bg-light')
    navbarBottom.classList.add('navbar-dark')
    navbarBottom.classList.add('bg-dark')
    offcanvas.classList.add('text-bg-dark')
    closeBtn.classList.add('btn-close-white')

    brightnessLabel.classList.remove('tool-darklabel')
    brightnessLabel.classList.add('tool-label')
    saturationLabel.classList.remove('tool-darklabel')
    saturationLabel.classList.add('tool-label')
    blurLabel.classList.remove('tool-darklabel')
    blurLabel.classList.add('tool-label')
    inversionLabel.classList.remove('tool-darklabel')
    inversionLabel.classList.add('tool-label')
    contrastLabel.classList.remove('tool-darklabel')
    contrastLabel.classList.add('tool-label')
    grayscaleLabel.classList.remove('tool-darklabel')
    grayscaleLabel.classList.add('tool-label')
    hueRotateLabel.classList.remove('tool-darklabel')
    hueRotateLabel.classList.add('tool-label')
    sepiaLabel.classList.remove('tool-darklabel')
    sepiaLabel.classList.add('tool-label')
    effectsNav.classList.remove('bottomNav-light')
    effectsNav.classList.add('bottomNav')
    presetsNav.classList.remove('bottomNav-light')
    presetsNav.classList.add('bottomNav')
    settingsNav.classList.remove('bottomNav-light')
    settingsNav.classList.add('bottomNav')
    applyVflipNav.classList.remove('bottomNav-light')
    applyVflipNav.classList.add('bottomNav')
    applyHflipNav.classList.remove('bottomNav-light')
    applyHflipNav.classList.add('bottomNav')
    rotate.classList.remove('bottomNav-light')
    rotate.classList.add('bottomNav')
    faq.classList.remove('navbar-nav-light')
    faq.classList.add('navbar-nav')
    contact.classList.remove('navbar-nav-light')
    contact.classList.add('navbar-nav')
    imageArea.classList.remove('image-area-light')
    imageArea.classList.add('image-area')
    userLabel.classList.remove('userLabel-light')

    localStorage.theme = 'light'
}