class Outline {
    #patternOfOutline = '';
    #patternOfAnchor = '';
    #allElement = [];

    constructor(patternOfOutline, patternOfAnchor) {
        this.#patternOfOutline = patternOfOutline;
        this.#patternOfAnchor = patternOfAnchor;
        this.allElements = document.querySelectorAll('*');
    }

    setGoToLogic() {
        // 找到符合 patternOfOutline 的超連結元素
        var outlines = this.#findElementMatchPattern('^outline.*$')
        // 找到符合 patternOfAnchor 的超連結元素
        var outlines = this.#findElementMatchPattern('^anchor.*$')
        outlines.forEach(outline => {
            document.getElementById(outline).addEventListener('click', () => {
                // 長一樣的拼裝再一起
                // 調整至視窗範圍 outline.click => auchor.scrollIntoView() 
                // 高亮離錨點最近的section

            })

        });
    }

    #findElementMatchPattern(patterns) {
        const regex = new RegExp(patterns);
        return Array.from(this.#allElement).filter(element => regex.test(element.id));
    }

    #setMovementLogic() {

    }

    #setHightLight() {

    }
}