document.addEventListener('DOMContentLoaded',()=>{
    set_title();
});

function set_title(){
    const tag = document.querySelector('.tag-name');
    const tag_name = localStorage.getItem('current_tag'); 
    tag.insertAdjacentHTML('beforeend',tag_name);
}
