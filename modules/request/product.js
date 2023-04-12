export function getProduct() {
    const result = document.querySelector('#xhr-2-result');
    
    document.querySelector('#xhr-2').addEventListener('click', () => {
        result.textContent = '';

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadend', () => {
        let responseText = xhr.responseText
        let responseJSON = JSON.parse(responseText)
        let addedHTML = ""
        for (let i=0; i<responseJSON.length; i++) {
            addedHTML =  addedHTML + `<li>${responseJSON[i].name}</li>`
            // console.log(responseJSON[i].name)
        }
        console.log(addedHTML)
        result.innerHTML = `<ul>${addedHTML}</ul>`

        // result.textContent = `${result.textContent}Finished with status: ${xhr.responseText}`;
    });

    xhr.open('GET', 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    xhr.send();
    result.textContent = `${result.textContent}Started XHR request\n`;});

    document.querySelector('#reload-2').addEventListener('click', () => {
        result.textContent = '';
        document.location.reload();
    });
}