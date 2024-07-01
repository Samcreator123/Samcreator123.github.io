class CodeSnippet{

    copy_closest_code_when_press_button(button, element, class_of_code){
        const copyButtons = document.querySelectorAll(button);

        // const copyButtons = document.querySelectorAll('.copy_button');

        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const codeContainer = button.closest(element);
                const codeElement = codeContainer.querySelector(class_of_code);
                const codeText = codeElement.textContent.trim();
        
                navigator.clipboard.writeText(codeText).then(() => {
                    const original_text = button.textContent;
                    button.textContent = 'copied successfully!';
                    setTimeout(() => {
                        button.textContent = original_text;
                    }, 1000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });
        });

    }

    select_this_code(element, class_of_code){
        document.querySelectorAll(element).forEach(container => {
        
            // .code-container 的第一個 code 元素
            const code = container.querySelector(class_of_code);
        
            
    
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
}





// 針對 .code-container 的點擊全選功能
export default CodeSnippet