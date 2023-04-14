export function promise() {
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

// fetchPromise
// .then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data[0].name)
//     })
// });

fetchPromise
.then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
})
.then((data) => {
    console.log(data[0].name);
    if (data[0].name === "baked beans") {
        throw new Error(`CUSTOM error: ${data[0].name}`);
    }
})
.catch((error) => {
    console.error(`Could not get products: ${error}`);
});

console.log("Started request…");
}