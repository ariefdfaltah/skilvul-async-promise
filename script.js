import { promise } from "./modules/examples/promise.js";
import { prosmiseAll } from "./modules/examples/promiseAll.js";
import { getExample } from "./modules/services/example.js";
import { getProduct } from "./modules/services/product.js";
import { getPokemon } from "./modules/services/pokemon.js";
import { getPokemonAsyncAwait } from "./modules/services/pokemonAsyncAwait.js";
import { login } from "./modules/services/login.js";

// promise()
// prosmiseAll()
getExample()
getProduct()
getPokemon()
getPokemonAsyncAwait()
login()

let loginStatus = localStorage.getItem("LoginStatus")
if (loginStatus == null) {
    const result = document.querySelector("#banner-5")
    result.innerHTML = `<h1>Silahkan Login</h1>`
} else {
    const result = document.querySelector("#banner-5")
    result.innerHTML = `<h1>Anda Telah Login</h1>`
}

