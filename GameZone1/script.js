document.getElementById('year').textContent = new Date().getFullYear();



function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

// login section


function showForm(formId) {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.classList.add('hidden'));
    document.getElementById(formId).classList.remove('hidden');
}

function validateLoginForm() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // if (username === "" || password === "") {
    //     alert("All fields must be filled out");
    //     return false;
    // }

    // alert("Login form submitted successfully!");
    return true;
}

function validateSignUpForm() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // if (username === "" || email === "" || password === "") {
    //     alert("All fields must be filled out");
    //     return false;
    // }

    // alert("Sign-up form submitted successfully!");
    return true;
}

function validateForgotForm() {
    const email = document.getElementById('forgot-email').value;

    // if (email === "") {
    //     alert("Email must be filled out");
    //     return false;
    // }

    // alert("Password reset form submitted successfully!");
    return true;
}

// ===============upcoming gaming veent
document.addEventListener('DOMContentLoaded', function () {
    const events = [
        {
            name: 'PUBG Tournament',
            date: '12-10-2024',
            time: '18:00',
            game: 'pubg',
            venue: 'Online',
            entryFee: 'free',
            skillLevel: 'intermediate',
            region: 'asia',
        },
        {
            name: 'Valorant Pro League',
            date: '01-11-2024',
            time: '15:00',
            game: 'valorant',
            venue: 'Offline - Arena XYZ',
            entryFee: 'paid',
            skillLevel: 'pro',
            region: 'north-america',
        },{
            name: 'PUBG Battle Royale Championship',
            date: '25-10-2024',
            time: '20:00',
            game: 'pubg',
            venue: 'Online',
            entryFee: 'paid',
            skillLevel: 'advanced',
            region: 'europe',
        },
        {
            name: 'GTA V Mayhem Masters',
            date: '10-11-2024',
            time: '17:00',
            game: 'gta-v',
            venue: 'Offline - City Arena',
            entryFee: 'free',
            skillLevel: 'beginner',
            region: 'south-america',
        },
        {
            name: 'Valorant Elite Warriors',
            date: '05-12-2024',
            time: '19:00',
            game: 'valorant',
            venue: 'Online',
            entryFee: 'paid',
            skillLevel: 'intermediate',
            region: 'asia',
        },
        {
            name: 'CS:GO Global Strike Tournament',
            date: '20-11-2024',
            time: '16:00',
            game: 'cs-go',
            venue: 'Offline - Global Arena',
            entryFee: 'free',
            skillLevel: 'pro',
            region: 'north-america',
        },
        {
            name: 'Spider-Man Super Hero Showdown',
            date: '15-12-2024',
            time: '14:00',
            game: 'spider-man',
            venue: 'Online',
            entryFee: 'free',
            skillLevel: 'beginner',
            region: 'europe',
        },
        {
            name: 'Free Fire Combat Challenge',
            date: '30-11-2024',
            time: '18:30',
            game: 'free-fire',
            venue: 'Offline - Battle Arena',
            entryFee: 'paid',
            skillLevel: 'advanced',
            region: 'asia',
        },{
            name: 'PUBG Ultimate Survival Clash',
            date: '18-12-2024',
            time: '21:00',
            game: 'pubg',
            venue: 'Online',
            entryFee: 'free',
            skillLevel: 'pro',
            region: 'middle-east',
        },
        {
            name: 'GTA V Chaos Street Brawl',
            date: '28-11-2024',
            time: '22:00',
            game: 'gta-v',
            venue: 'Offline - Grand Arena',
            entryFee: 'paid',
            skillLevel: 'intermediate',
            region: 'europe',
        },
        {
            name: 'Valorant Vanguard Series',
            date: '30-10-2024',
            time: '13:00',
            game: 'valorant',
            venue: 'Offline - Pro Arena XYZ',
            entryFee: 'free',
            skillLevel: 'pro',
            region: 'south-asia',
        },
        {
            name: 'CS:GO Thunderstrike Tournament',
            date: '02-12-2024',
            time: '20:30',
            game: 'cs-go',
            venue: 'Online',
            entryFee: 'paid',
            skillLevel: 'advanced',
            region: 'europe',
        },
        {
            name: 'Free Fire Blitzkrieg Battle',
            date: '20-12-2024',
            time: '19:00',
            game: 'free-fire',
            venue: 'Offline - Combat Zone',
            entryFee: 'free',
            skillLevel: 'beginner',
            region: 'africa',
        },
        
        
        
        // Add more events as needed
    ];
  
    const eventsContainer = document.getElementById('events-container');
    const modal = document.getElementById('registration-modal');
    const closeBtn = document.querySelector('.close-btn');
  
    // Render events in the container
    function renderEvents(eventList) {
        eventsContainer.innerHTML = ''; // Clear existing events
        eventList.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <p>Venue: ${event.venue}</p>
                <button class="register-btn">Register</button>
            `;
            eventCard.querySelector('.register-btn').addEventListener('click', openModal);
            eventsContainer.appendChild(eventCard);
        });
    }
  
    // Load initial events
    renderEvents(events);
  
    // Open the registration modal
    function openModal() {
        modal.style.display = 'flex';
    }
  
    // Close the modal when clicking the close button
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
  
    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
  
    // Handle form submission
    document.getElementById('registration-form').addEventListener('submit', function (e) {
        // e.preventDefault();
        // alert('You have successfully registered!');
        // modal.style.display = 'none';
    });
  
    // Filter Logic
    document.getElementById('filter-btn').addEventListener('click', function() {
        const selectedGame = document.getElementById('game-type').value;
        const selectedEntryFee = document.getElementById('entry-fee').value;
        const selectedSkillLevel = document.getElementById('skill-level').value;
        const selectedRegion = document.getElementById('region').value;
  
        const filteredEvents = events.filter(event => {
            return (selectedGame === 'all' || event.game === selectedGame) &&
                   (selectedEntryFee === 'all' || event.entryFee === selectedEntryFee) &&
                   (selectedSkillLevel === 'all' || event.skillLevel === selectedSkillLevel) &&
                   (selectedRegion === 'all' || event.region === selectedRegion);
        });
  
        renderEvents(filteredEvents);
    });
  });
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('photo');
    var fileSize = fileInput.files[0].size;
    var fileType = fileInput.files[0].type;

    // Optional: Check file size (limit to 2MB) and type (only images)
    if (fileSize > 2 * 1024 * 1024) { // 2MB limit
        alert("File size exceeds 2MB");
        event.preventDefault();
    } else if (!fileType.startsWith('image/')) {
        alert("Only image files are allowed");
        event.preventDefault();
    }
});
