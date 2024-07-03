import Theme from '/js/theme.js';
import {remove_dot_html} from '/js/remove-dot-html.js';
import {loadTemplate} from '/js/template_loader.js'
import config from '/js/config.js';
import Navbar from '/js/adjustable_navbar.js'


document.addEventListener('DOMContentLoaded',()=>{
    // 載入 header 的html、亮暗主題、navbar 的裝置切換
    const theme = new Theme('theme-toggle')

    // 載入 header 的html、亮暗主題、navbar 的裝置切換
    loadTemplate('/html-template/header.html', 'header-template')
    .then(() =>{
        return theme.setDefault();
    })
    .then(()=>{
        return theme.setAddEventListenerIntoButton();
    })
    .then(()=>{
        const navbar = new Navbar('navbar','menu-toggle')
        navbar.toggle_navbar();
    })
    .catch(error => console.error('Error loading template:',error))
    
    loadTemplate('/html-template/footer.html', 'footer-template');
    
    remove_dot_html(config.isDevelopmentEnv);
});