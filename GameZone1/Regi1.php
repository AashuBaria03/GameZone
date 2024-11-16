<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_auth";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullName = $conn->real_escape_string($_POST['fullName']);
    $enrollmentNumber = $conn->real_escape_string($_POST['enrollmentNumber']);
    $dob = $conn->real_escape_string($_POST['dob']);
    $email = $conn->real_escape_string($_POST['email']);
    $username = $conn->real_escape_string($_POST['username']);
    $password = password_hash($conn->real_escape_string($_POST['password']), PASSWORD_BCRYPT);
    $game = $conn->real_escape_string($_POST['game']);
    
    // Handle file upload
    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $file = $_FILES['file'];
        $fileName = basename($file["name"]);
        $fileTmpName = $file["tmp_name"];
        $fileSize = $file["size"];
        $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
        
        // Check if file type is an image
        $allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];
        if (in_array($fileType, $allowedTypes) && $fileSize <= 5000000) { // limit file size to 5MB
            $uploadDir = "IMG/";
            $filePath = $uploadDir . uniqid() . "." . $fileType;
            move_uploaded_file($fileTmpName, $filePath);
        } else {
            die("Invalid file type or file is too large.");
        }
    } else {
        $filePath = null; // if no file is uploaded
    }

    // Insert data into the database
    $sql = "INSERT INTO registration1 (full_name, enrollment_number, dob, email, username, password, game, profile_picture)
            VALUES ('$fullName', '$enrollmentNumber', '$dob', '$email', '$username', '$password', '$game', '$filePath')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
