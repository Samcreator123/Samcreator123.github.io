export function adjustable_navbar()
{
    return new Promise((resolve, reject)=>{
        try{
            const menuToggle = document.getElementById('menu-toggle');
            
            const navMenu = document.getElementById('nav-menu');
        
            menuToggle.addEventListener('click', function() {
                if (navMenu.classList.contains('closed')) {
                    navMenu.classList.remove('closed');
                    navMenu.classList.add('open');
                } else {
                    navMenu.classList.remove('open');
                    navMenu.classList.add('closed');
                }
            });
            resolve();
        }
        catch(error)
        {
            reject(error)
        }        
    })

}