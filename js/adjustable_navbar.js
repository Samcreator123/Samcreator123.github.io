class Navbar{
    
    #navbar = '';
    #toggleIcon = '';
    #isOpen = false;

    constructor(navbar, toggleIcon){
        this.#navbar = navbar;
        this.#toggleIcon = toggleIcon;
    }
    
    toggle_navbar(){
        return new Promise((resolve, reject)=>{
            try{
                const toggle = document.getElementById(this.#toggleIcon);
                toggle.addEventListener('click', this.#toggle.bind(this))
                resolve();
            }
            catch(err){
                reject(err);
            }
        })
    }


    #toggle(){
        if(this.#isOpen === true){
            const nav = document.getElementById(this.#navbar)
            nav.classList.remove('open')
            nav.classList.add('close')  
            this.#isOpen = false;
        }
        else
        {
            const nav = document.getElementById(this.#navbar)
            nav.classList.remove('close')
            nav.classList.add('open')
            this.#isOpen = true;
        }
    }
}

export default Navbar