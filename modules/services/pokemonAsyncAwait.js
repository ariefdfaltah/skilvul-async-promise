export function getPokemonAsyncAwait() {
    console.log("masuk 1")

    //Mengambil element dengan id xhr-3-result
    const result = document.querySelector("#xhr-4-result")

    //Memanggil function onClickGet dengan argumen dari variable result
    onClickGet(result)
    
    //Memanggil function onClickReset dengan argumen dari variable result
    onClickReset(result)
}

function onClickGet(result) {
    //Inisiasi event listener dengan target dari hasil query selector yang mengambil element demgan id xhr-3
    document.querySelector('#xhr-4').addEventListener('click', async () => {
        //Inisiasi pada variable result konten yang berupa text akan diberi nilai kosong
        result.textContent = '';

        //Inisiasi try catch strategi untuk menghandle error
        try {
            //Inisiasi pemanggilan API
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            
            //Handle apabila response tidak oke
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            //Handle apabila response oke
            result.innerHTML = parseResponse(await response.json())
        } catch(error) {
            //Handle response error
            result.innerHTML = error
        }
    })
}

function onClickReset(result) {
    document.querySelector('#reset-4').addEventListener('click', () => {
        result.textContent = '';
    });
}

function parseResponse(responseJSON) {
    let showText = `
    <ul>
        <li>Name: ${responseJSON.name}</li>
        <li>Height: ${responseJSON.height}</li>
        <li>Weight: ${responseJSON.weight}</li>
    </ul>
    `
    return showText
}