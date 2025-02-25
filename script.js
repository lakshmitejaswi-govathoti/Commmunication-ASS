// Mock user data for authentication
const mockUsers = [];

// Function to show login form
function showLogin() {
    document.getElementById('loginForm').style.display = "block";
    document.getElementById('registerForm').style.display = "none";
}

// Function to show register form
function showRegister() {
    document.getElementById('registerForm').style.display = "block";
    document.getElementById('loginForm').style.display = "none";
}

// Handle register form submission
document.getElementById('registerFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Add user to mockUsers array
    mockUsers.push({ email, password });
    document.getElementById('registerMessage').textContent = "Registration successful!";
});

// Handle login form submission
document.getElementById('loginFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple authentication check
    const user = mockUsers.find(user => user.email === email && user.password === password);
    if (user) {
        document.getElementById('loginMessage').textContent = "Login successful!";
        document.getElementById('authBackground').style.display = "none"; // Hide login form
        document.getElementById('dashboard').style.display = "block"; // Show dashboard
    } else {
        document.getElementById('loginMessage').textContent = "Invalid email or password.";
    }
});

// Handle grammar form submission
document.getElementById('grammarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const answer = document.querySelector('input[name="grammarQuestion"]:checked').value;
    if (answer === "am") {
        document.getElementById('grammarResult').textContent = "Correct! Your score is 100.";
    } else {
        document.getElementById('grammarResult').textContent = "Incorrect. The correct answer is 'am'. Your score is 0.";
    }
});

// Handle vocabulary form submission
document.getElementById('vocabularyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const answer = document.querySelector('input[name="vocabularyQuestion"]:checked').value;
    if (answer === "having keen understanding") {
        document.getElementById('vocabularyResult').textContent = "Correct! Your score is 100.";
    } else {
        document.getElementById('vocabularyResult').textContent = "Incorrect. The correct answer is 'having keen understanding'. Your score is 0.";
    }
});

// Handle listening form submission
document.getElementById('listeningForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const answer = document.querySelector('input[name="listeningQuestion"]:checked').value;
    if (answer === "main idea 1") {
        document.getElementById('listeningResult').textContent = "Correct! Your score is 100.";
    } else {
        document.getElementById('listeningResult').textContent = "Incorrect. The correct answer is 'main idea 1'. Your score is 0.";
    }
});

// Speaking Assessment
document.getElementById('playAudioButton').addEventListener('click', function() {
    const audio = document.getElementById('speakingAudio');
    audio.play();
});

document.getElementById('startRecordingButton').addEventListener('click', function() {
    document.getElementById('speakingResult').textContent = "Voice Pitching Analysis: Excellent";
    document.getElementById('speakingPosture').textContent = "Good Posture";
});

// Writing Assessment
document.getElementById('submitWritingButton').addEventListener('click', function() {
    const essay = document.getElementById('writingEssay').value;
    if (essay.length > 0) {
        document.getElementById('writingResult').textContent = "Essay submitted successfully!";
        document.getElementById('writingPosture').textContent = "Upright Posture";
    } else {
        document.getElementById('writingResult').textContent = "Please write something!";
    }
});

// Logout Function
function logout() {
    document.getElementById('dashboard').style.display = "none";
    document.getElementById('authBackground').style.display = "flex"; // Or "block" depending on your layout
}

// Function to start Grammar Assessment
function startGrammarAssessment() {
    document.getElementById('grammarForm').style.display = "block";
}

// Function to start Vocabulary Assessment
function startVocabularyAssessment() {
    document.getElementById('vocabularyForm').style.display = "block";
}

// Function to start Listening Assessment
function startListeningAssessment() {
    document.getElementById('listeningForm').style.display = "block";
}

// Function to start Speaking Assessment
function startSpeakingAssessment() {
    document.getElementById('speakingAssessment').style.display = "block";
}

// Function to start Writing Assessment
function startWritingAssessment() {
    document.getElementById('writingAssessment').style.display = "block";
}
