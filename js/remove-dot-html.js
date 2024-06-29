export function remove_dot_html(isDevelopmentEnv)
{

    if(isDevelopmentEnv)
    {
        return;
    }
    
    if (window.location.pathname.endsWith('.html')) {
        const newPath = window.location.pathname.replace('.html', '');
        window.history.replaceState(null, "", newPath);
    }

}