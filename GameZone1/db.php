<?php
// db.php
$host = 'localhost'; // Change if your MySQL runs elsewhere
$user = 'root';      // MySQL username
$password = '';      // MySQL password
$dbname = 'user_auth'; // Database name

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
