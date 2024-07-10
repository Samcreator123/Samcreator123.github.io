class Outline {
    #patternOfOutline = '';
    #patternOfAnchor = '';
    #allElement = new Set();

    constructor(patternOfOutline, patternOfAnchor) {
        this.#patternOfOutline = patternOfOutline;
        this.#patternOfAnchor = patternOfAnchor;
        document.querySelectorAll('*').forEach(o => {
            this.#allElement.add(o.id)
        })
    }

    setGoToLogic() {

        // 找到符合 patternOfAnchor 的超連結元素 '^anchor.*$'
        let anchorDic = this.#turnIntoDictionary('.', 1, this.#findElementMatchPattern(this.#patternOfAnchor));

        // 找到符合 patternOfOutline 的超連結元素 '^outline.*$'
        let outlinesDic = this.#turnIntoDictionary('.', 1, this.#findElementMatchPattern(this.#patternOfOutline));

        for (let key in outlinesDic) {
            let outlineId = outlinesDic[key];
            document.getElementById(outlineId).addEventListener('click', () => {
                let anchorId = anchorDic[key];

                if (!anchorId) return;
                // 長一樣的拼裝再一起
                let anchorElement = document.getElementById(anchorId);

                // 調整至視窗範圍 outline.click => auchor.scrollIntoView() 
                anchorElement.scrollIntoView(this.#setMovementLogic());

                // 高亮離錨點最近的section
                this.#setNearestSectionHightLight(anchorElement, 2000);
            })
        }
    }

    #findElementMatchPattern(patterns) {
        const regex = new RegExp(patterns);
        return Array.from(this.#allElement).filter(element => regex.test(element));
    }

    #turnIntoDictionary(symbolOfSplit, key_index, elements) {
        let dic = {};

        elements.forEach(element => {
            let key = element.split(symbolOfSplit)[key_index];
            dic[key] = element;
        })

        return dic;
    }

    #setMovementLogic() {
        return {
            behavior: "smooth",
            block: "start",
            inline: "center",
        }
    }

    #setNearestSectionHightLight(anchorElement, milisecond) {
        const closestSection = anchorElement.closest('section');
        if (closestSection) {
            closestSection.classList.add('high-light');

            setTimeout(() => {
                closestSection.classList.remove('high-light');
            }, milisecond)
        }
    }
}

export default Outline