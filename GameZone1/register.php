<?php
// Database connection settings
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "user_auth"; 

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $game_id = $conn->real_escape_string($_POST['game-id']);
    $additional_info = $conn->real_escape_string($_POST['additional-info']);

    // Insert data into the registrations table
    $sql = "INSERT INTO registrations (name, email, game_id, additional_info)
            VALUES ('$name', '$email', '$game_id', '$additional_info')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // File upload logic
    if (isset($_FILES['photo']) && is_uploaded_file($_FILES['photo']['tmp_name']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $_FILES['photo']['tmp_name'];
        $fileName = $_FILES['photo']['name'];
        $fileSize = $_FILES['photo']['size'];
        $fileType = $_FILES['photo']['type'];
        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));

        // Set allowed file types (e.g., jpeg, png)
        $allowedFileExtensions = array('jpg', 'jpeg', 'png');
        if (in_array($fileExtension, $allowedFileExtensions)) {
            // Directory where the file will be stored
            $uploadFileDir = 'IMG/'; // Ensure directory exists and is writable
            $destPath = $uploadFileDir . $fileName;

            if (move_uploaded_file($fileTmpPath, $destPath)) {
                echo 'File is successfully uploaded to ' . $destPath;
            } else {
                echo 'There was an error uploading the file.';
            }
        } else {
            echo 'Upload failed. Allowed file types: ' . implode(',', $allowedFileExtensions);
        }
    } else {
        // Handle case where no file was uploaded or an error occurred
        if (!isset($_FILES['photo'])) {
            echo '';
        } else {
            echo 'No file uploaded or there was an error. Error Code: ' . $_FILES['photo']['error'];
        }
    }

    // Save other form data in the database or process as needed
}

// Close the database connection
$conn->close();
?>
