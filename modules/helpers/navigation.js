export function navigationController(show) {
    const navigation = document.querySelector('#navigation')
    if (show) {
        navigation.style.visibility = "visible";
        localStorage.setItem("navigation", "visible")
        sessionStorage.setItem("navigation-session", "visible")
        document.cookie = "navigation=visible; expires=Thu, 13 Apr 2023 10:57:00 UTC;path=/"
    } else {
        navigation.style.visibility = "hidden";
        localStorage.setItem("navigation", "hidden")
        sessionStorage.setItem("navigation-session", "hidden")
        document.cookie = "navigation=hidden"
    }
}