import Theme from '/js/theme.js';
import { remove_dot_html } from '/js/remove-dot-html.js';
import { loadTemplate } from '/js/template_loader.js';
import CodeSnippet from '/js/code_snippet.js'
import config from '/js/config.js';
import Navbar from '/js/adjustable_navbar.js'
import Outline from '/js/outline.js'

// 用 load 會跑不出來
document.addEventListener('DOMContentLoaded', () => {

    const theme = new Theme('theme-toggle')
    // 載入 header 的html、亮暗主題、navbar 的裝置切換
    loadTemplate('/html-template/header.html', 'header-template')
        .then(() => {
            return theme.setDefault();
        })
        .then(() => {
            return theme.setAddEventListenerIntoButton();
        })
        .then(() => {
            const navbar = new Navbar('navbar', 'menu-toggle')
            navbar.toggle_navbar();
        })
        .catch(error => console.error('Error loading template:', error))

    loadTemplate('/html-template/footer.html', 'footer-template');

    remove_dot_html(config.isDevelopmentEnv);

    const code_snippet = new CodeSnippet();
    code_snippet.select_this_code('.code-container', 'code');
    code_snippet.copy_closest_code_when_press_button('.copy_button', '.code-container', 'code');

    const outline = new Outline('^outline.*$', '^anchor.*$');
    outline.setGoToLogic();
});