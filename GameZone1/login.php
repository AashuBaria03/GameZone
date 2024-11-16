<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_auth";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    // Check if the user exists
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        
        // Verify the hashed password
        if (password_verify($pass, $row['password'])) {
            $_SESSION['username'] = $row['username']; // Start session
            echo "Login successful!";
        } else {
            echo "Invalid email or password!";
        }
    } else {
        echo "User not found!";
    }
}
$conn->close();
?>
