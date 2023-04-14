import { navigationController } from "../helpers/navigation.js";
import { sorting_asc } from "../helpers/sorting_asc.js";

export function getProduct() {
    const result = document.querySelector('#xhr-2-result');
    
    document.querySelector('#xhr-2').addEventListener('click', () => {
        result.textContent = '';

        let navigation = "hidden"

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('loadend', () => {
            let productNames = []
            let responseText = xhr.responseText
            let responseJSON = JSON.parse(responseText)
            let addedHTML = ""
            for (let i=0; i<responseJSON.length; i++) {
                addedHTML =  addedHTML + `<li>${responseJSON[i].name}</li>`
                productNames.push(responseJSON[i].name)
            }
            result.innerHTML = `<ul>${addedHTML}</ul>`
            navigationController(navigation)

            document.querySelector('#sorting-asc').addEventListener('click', () => {
                productNames = sorting_asc(productNames)
                result.innerHTML = ""
                addedHTML = ""
                for (let i=0; i<productNames.length; i++) {
                    addedHTML =  addedHTML + `<li>${productNames[i]}</li>`
                }
                result.innerHTML = `<ul>${addedHTML}</ul>`
            })
        });

        xhr.open('GET', 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        xhr.send();
    
        result.textContent = `${result.textContent}Started XHR request\n`
    });

    document.querySelector('#reload-2').addEventListener('click', () => {
        result.textContent = '';
        navigationController(false)
        // document.location.reload();
    });
        
}