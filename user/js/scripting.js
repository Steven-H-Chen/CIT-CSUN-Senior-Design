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
        alert("Login successful! Redirecting...");

        // Debugging log to see if this runs
        console.log("Redirecting to dashboard.html");

        // Ensure this runs after the alert
        setTimeout(() => {
            window.location.assign("dashboard.html"); // Alternative to location.href
        }, 1000); // Delay to allow alert display

    } else {
        document.getElementById("error-message").textContent = "Invalid email or password.";
    }
}
