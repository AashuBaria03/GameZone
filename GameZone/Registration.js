document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        fullName: formData.get('fullName'),
        enrollmentNumber: formData.get('enrollmentNumber'),
        dob: formData.get('dob'),
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password'),
        game: formData.get('game'),
        file: formData.get('file')
    };

    console.log('Registration Data:', data);

    // Add your AJAX request here to send data to the server

    alert('Registration successful!');
});
