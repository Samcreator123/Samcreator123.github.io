export function set_theme(){

    return new Promise((resolve, reject)=>{
        try{
            const light_icon = '🌞';
            const dark_icon = '🌚';
            // 判斷是否有 localStorage 是否有 theme 如果沒有則 theme 為 light，該表達式為短路求值( short-circuit evaluation )
            const saved_theme = localStorage.getItem('theme') || 'light';
            // 該 body 新增一個類別，如果將上一行寫入這個函式，若 localStorage 沒有該值則不會採用 light 而是 null
            document.body.classList.add(saved_theme + '-mode');
            
            const themeToggleButton = document.getElementById('theme-toggle');
            themeToggleButton.textContent = saved_theme === 'light' ? light_icon : dark_icon;
        
        
            // 替更換主題按鈕新增一個點擊的事件
            document.getElementById('theme-toggle').addEventListener('click', () => {
                const newTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
                
                // 切換亮色以及暗色模式
                document.body.classList.toggle('light-mode');
                document.body.classList.toggle('dark-mode');
                
                const isLightMode = newTheme === 'light';  
                themeToggleButton.textContent = isLightMode ? light_icon : dark_icon;
                // 更新回網頁暫存空間
                localStorage.setItem('theme', newTheme);
            });
            resolve();
        }
        catch(error){
            reject(error);
        }

    })
}

