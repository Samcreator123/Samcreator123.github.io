export function loadTemplate(url, elementId) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).insertAdjacentHTML('beforeend', data);
                resolve();
            })
            .catch(error => {
                console.error('Error loading template:', error);
                reject(error);
            })
    })
}