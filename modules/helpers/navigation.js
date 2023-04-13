export function navigationController(show) {
    const navigation = document.querySelector('#navigation')
    if (show) {
        navigation.style.visibility = "visible";
        localStorage.setItem("navigation", "visible")
    } else {
        navigation.style.visibility = "hidden";
        localStorage.setItem("navigation", "hidden")
    }
}