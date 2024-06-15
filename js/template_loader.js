export function loadTemplate(url, elementId, callback)
{
    fetch(url)
    .then(response => response.text())
    .then(data => {
        document.getElementById(elementId).innerHTML = data;
        if(callback) callback();
    })
    .catch(error => console.error('Error loading template:',error));
}