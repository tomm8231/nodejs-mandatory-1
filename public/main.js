document.addEventListener("DOMContentLoaded", function () {
    const bodyElement = document.body
    let fontToggle = document.getElementById("fontToggle")
    let isAltFont = null

    function toggleFont() {

        bodyElement.classList.toggle("alt-font")
        // Check if the alternative font class is applied
        isAltFont = bodyElement.classList.contains("alt-font")

        localStorage.setItem("selectedFont", isAltFont ? "alt-font" : "default-font")

        fontToggle.innerText = "skift til " + ((localStorage.getItem("selectedFont")==="alt-font") ? "normal" : "dos") + " font"

        if (localStorage.getItem("selectedFont") === "default-font") {
            fontToggle.classList.add("alt-font")
        } else {
            fontToggle.classList.remove("alt-font")
        }
        
        return false // This prevents the link from navigating
    }

    // Event listener to the link
    document.getElementById("fontToggle").addEventListener("click", toggleFont)

    // Checks local storage for a selected font from ealier
    const storedFont = localStorage.getItem("selectedFont")
    if (storedFont === "alt-font") {
        bodyElement.classList.add("alt-font")
    }

    document.getElementById('fontToggle').innerText = "skift til " + ((localStorage.getItem("selectedFont")==="alt-font" || null) ? "normal" : "dos") + " font"

})