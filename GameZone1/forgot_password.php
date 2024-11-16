<?php
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
    $new_password = $_POST['new_password'];

    // Hash the new password
    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

    // Check if the user exists
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Update the user's password
        $update_sql = "UPDATE users SET password='$hashed_password' WHERE email='$email'";
        if ($conn->query($update_sql) === TRUE) {
            echo "Password updated successfully!";
        } else {
            echo "Error updating password: " . $conn->error;
        }
    } else {
        echo "User not found!";
    }
}
$conn->close();
?>
