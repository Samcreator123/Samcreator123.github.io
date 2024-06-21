import {set_theme} from '/js/theme.js';
import {remove_dot_html} from '/js/remove-dot-html.js';
import {loadTemplate} from '/js/template_loader.js'
import {store_tagText_onClick} from '/js/tags.js'

// 用 load 會跑不出來
document.addEventListener('DOMContentLoaded',()=>{
    loadTemplate('/html-template/header.html', 'header-template', set_theme);
    loadTemplate('/html-template/footer.html', 'footer-template');
    remove_dot_html();
    store_tagText_onClick();
});