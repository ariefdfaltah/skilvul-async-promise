export function getPokemon() {
    //Mengambil element dengan id xhr-3-result
    const result = document.querySelector("#xhr-3-result")

    //Memanggil function onClickGet dengan argumen dari variable result
    onClickGet(result)
    
    //Memanggil function onClickReset dengan argumen dari variable result
    onClickReset(result)
}

function onClickGet(result) {
    //Inisiasi event listener dengan target dari hasil query selector yang mengambil element demgan id xhr-3
    document.querySelector('#xhr-3').addEventListener('click', () => {
        //Inisiasi pada variable result konten yang berupa text akan diberi nilai kosong
        result.textContent = '';

        //Inisasi variable xhr yang akan menggunakan function XMLHttpRequest untuk memanggil API
        const xhr = new XMLHttpRequest();

        //Inisiasi event listener yang akan menjalan function ketika proses pemanggilan API sudah selesai
        xhr.addEventListener('loadend', () => {
            let responseResult = parseResponse(xhr.responseText)
            result.innerHTML = responseResult
         });

        //Menentukan http method dan url dari API
        xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu');
        
        //Mengeksekusi proses pemanggilan API
        xhr.send();

    })
}

function onClickReset(result) {
    document.querySelector('#reset-3').addEventListener('click', () => {
        result.textContent = '';
    });
}

function parseResponse(responseText) {
    let responseJSON = JSON.parse(responseText)
    let showText = `
    <ul>
        <li>Name: ${responseJSON.name}</li>
        <li>Height: ${responseJSON.height}</li>
        <li>Weight: ${responseJSON.weight}</li>
    </ul>
    `
    return showText
}