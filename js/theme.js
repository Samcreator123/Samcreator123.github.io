class Theme{
    
    #light_icon = '🌞';
    #dark_icon = '🌚';
    #buttonId = '';
    
    constructor(buttonId){
        this.#buttonId = buttonId
    }

    setDefault(){
        return new Promise((resolve, reject) => {
            try{
                const themeInLocalStorage = localStorage.getItem('theme');
                
                if(themeInLocalStorage){
                    this.#applyTheme(themeInLocalStorage)
                }
                else{
                    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    const theme = isDark ? 'dark' : 'light';
                    this.#applyTheme(theme)
                }

                resolve()
            }catch(err){
                reject(err)
            }
        })
    }

    setAddEventListenerIntoButton(){
        return new Promise((resolve, reject) => {
            try{
                const themeToggleButton = document.getElementById(this.#buttonId); 

                themeToggleButton.addEventListener('click', () => {
                    const currentTheme = localStorage.getItem('theme');
                    
                    if(!currentTheme){
                        console.error('currentTheme should be not null or empty')
                        reject('currentTheme should be not null or empty');
                    }
                    
                    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                    this.#applyTheme(newTheme);
                });
                resolve()
            }catch(err){
                reject(err)
            }
        })
    }

    #applyTheme(theme){
        return new Promise((resolve, reject)=>{
            try{
                const themeToggleButton = document.getElementById(this.#buttonId);
                
                if(!theme){
                    console.error('theme should be not null or empty')
                    reject('theme should be not null or empty');
                }
                themeToggleButton.textContent = theme === 'dark' ? this.#dark_icon : this.#light_icon;
                document.documentElement.className = '';
                document.documentElement.classList.add(theme + '-theme')                
                localStorage.setItem('theme', theme);   
                resolve();
            }
            catch(err)
            {
                reject(err)
            }
 
        })
    }
}


export default Theme

