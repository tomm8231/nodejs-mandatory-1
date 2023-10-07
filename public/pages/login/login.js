document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault()

const username = document.getElementById("username").value
const password = document.getElementById("password").value

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    })
    .then(response => {
        
        if (response.redirected) {
            window.location.href = response.url
        } else {
            document.getElementById("username").value = ""
            document.getElementById("password").value = ""
            document.getElementById("status").innerText = "Ugyldigt login"
        }

    })
    .catch(error => {
        document.getElementById("status").innerText = "Fejl ved login"
        console.error("Fetch error", error)
    })})