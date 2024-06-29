import {set_theme} from '/js/theme.js';
import {remove_dot_html} from '/js/remove-dot-html.js';
import {loadTemplate} from '/js/template_loader.js'
import config from '/js/config.js';

document.addEventListener('DOMContentLoaded',()=>{
    loadTemplate('/html-template/header.html', 'header-template', set_theme);
    loadTemplate('/html-template/footer.html', 'footer-template');
    remove_dot_html(config.isDevelopmentEnv);
});
