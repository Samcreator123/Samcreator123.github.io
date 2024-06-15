import config from '/js/config.js';

export function remove_dot_html()
{

    if(config.isDevelopmentEnv)
    {
        return;
    }
    
    if (window.location.pathname.endsWith('.html')) {
        const newPath = window.location.pathname.replace('.html', '');
        window.history.replaceState(null, "", newPath);
    }

}