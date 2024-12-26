// Toggle video visibility on thumbnail click
document.getElementById("video-thumbnail").addEventListener("click", function() {
    document.getElementById("video-thumbnail").style.display = "none";  // Hide image
    document.getElementById("video-player").style.display = "block";  // Show video
});

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create an object with the form data
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Convert the object to JSON
    const jsonData = JSON.stringify(formData);

    // Send the data to the server using fetch() (replace with your actual URL)
    fetch("https://mi-servidor.com/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })
    .then(response => response.json())  // Process the JSON response
    .then(data => {
        document.getElementById("responseMessage").innerText = "¡Mensaje enviado exitosamente!";
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText = "Hubo un error al enviar el mensaje.";
    });
});

