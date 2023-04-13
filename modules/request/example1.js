export function getExample() {
    const log = document.querySelector('.event-log');
    
    document.querySelector('#xhr-1').addEventListener('click', () => {
    log.textContent = '';

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadend', () => {
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });

    xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
    xhr.send();
    log.textContent = `${log.textContent}Started XHR request\n`;});

    document.querySelector('#reload-1').addEventListener('click', () => {
        log.textContent = '';
        // document.location.reload();
    });
}