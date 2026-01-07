// App State
let currentUser = null;
let medications = [];
let reminders = [];
let history = [];
let doctors = [];
let currentPage = 'dashboard';
let editMedId = null;

// Initial Data
const initialMedications = [
    {
        id: 1,
        name: "Amoxicillin",
        dosage: "500mg",
        type: "capsule",
        frequency: "twice",
        time: "08:00",
        duration: 10,
        instructions: "Take with food",
        status: "pending",
        urgent: false
    },
    // ... add more medications
];

// Initialize App
function initApp() {
    medications = JSON.parse(localStorage.getItem('medications')) || initialMedications;
    reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    history = JSON.parse(localStorage.getItem('history')) || [];
    doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = savedUser;
        showApp();
        updateUI();
    }
}

// DOM Elements
const loginPage = document.getElementById('loginPage');
const appContainer = document.getElementById('appContainer');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Login Functionality
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (username === 'Shujoonm99@' && password === 'password123') {
        currentUser = username;
        localStorage.setItem('currentUser', username);
        showNotification('Login successful!', 'Welcome back to MedRemind.', 'success');
        showApp();
        updateUI();
    } else {
        showNotification('Login failed', 'Invalid username or password.', 'error');
    }
});

// ... Add all your JavaScript functions here ...

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});