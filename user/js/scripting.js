document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get user input
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Call authentication function
        authenticateUser(email, password);
    });
});

// Temporary authentication function (Replace with Firebase later)
function authenticateUser(email, password) {
    // Hardcoded temporary user
    const tempUser = {
        email: "tempuser@example.com",
        password: "TempPass123"
    };

    if (email === tempUser.email && password === tempUser.password) {
        window.location.href = "../index.html";
    } 
    else {
        document.getElementById("error-message").textContent = "Invalid email or password.";
    }
}
