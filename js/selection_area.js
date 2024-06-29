// 針對 .code-container 的點擊全選功能
export function select_only_this_element(element, area){
    document.querySelectorAll(element).forEach(container => {
    
        // .code-container 的第一個 code 元素
        const code = container.querySelector(area);
    
        container.addEventListener('keydown',(e) =>{
            if(e.key === 'a' && (e.ctrlKey || e.metaKey)){
                e.preventDefault();
                // 創建一個範圍的空對象，表示文件的一個範圍，這邊用以代表 code 這個元素(範圍)
                const range = document.createRange(); 
                range.selectNodeContents(code);
                // 當前視窗的選擇範圍
                const selection = window.getSelection();
                // 去除全選
                selection.removeAllRanges();
                // 選擇範圍只有 range 這個元素
                selection.addRange(range);
            }
        });
    })
}