export function store_tagText_onClick(){
    document.querySelectorAll('.tag').forEach(tag =>{
        const text_of_tag = tag.textContent;
        tag.addEventListener('click',()=>{
            localStorage.setItem('current_tag',text_of_tag);
        })
    })
}